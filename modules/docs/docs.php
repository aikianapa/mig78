<?php
require $_SERVER['DOCUMENT_ROOT'].'/vendor/autoload.php';
include_once($_SERVER['DOCUMENT_ROOT'].'/vendor/fpdf/fpdf.php'); 
include_once($_SERVER['DOCUMENT_ROOT'].'/vendor/fpdf/fpdi_rotate.php');

use PhpOffice\PhpWord\IOFactory;
use PhpOffice\PhpWord\TemplateProcessor;

use setasign\Fpdi\Fpdi;
use setasign\Fpdi\PdfReader;

class modDocs
{
    private $app;
    private $post;
    public function __construct($app)
    {
        set_time_limit(600);
        $this->app = $app;
        $mode = $app->vars('_route.mode');
        $this->post = $this->app->vars('_post');
        if (method_exists($this, $mode)) {
            $this->$mode();
            exit;
        }
    }

    public function quote()
    {
        if ($this->post['quote'] == '') {
            return;
        }

        @$req = $this->app->treeRead('reqlist')['tree']['data'];
        $req = $this->app->treeFindBranchById($req, $this->post['quote']);
        $docs = $this->app->formClass('docs');
        $uri = "/uploads/docs";
        $path = $this->app->vars('_route.path_app').$uri;

        @$ctrs = $this->app->treeRead('countries')['tree']['data'];
        if (@$req['data']['template'][0]['img'] > '') {
            $file = urldecode($req['data']['template'][0]['img']);
            $file = $this->app->vars('_route.path_app').$file;
        } else {
            $file = $this->app->vars('_route.path_app').'/tpl/docs/'.$this->post['quote'].'.docx';
        }
        $tpl = new TemplateProcessor($file);
        $item = $this->post;
        $dname = "{$item['quote']}_{$item['id']}";
        $doc = $path."/{$dname}.docx";
        $pdf = $path."/{$dname}.pdf";
        $uri = $uri."/{$dname}.pdf";


        $docs->beforeItemShow($item);
        switch ($this->post['quote']) {
            case 'regspr':
                $item['doc_vnj'] = $docs->getDocument($item, 'vnj');
                $item['doc_rvp'] = $docs->getDocument($item, 'rvp');
                $item['outgoing'] = $docs->getArrOutgoing($item);
                $docs->beforeItemShow($item);
                break;
            case 'vnj':
                $item['male'] = $item['female'] = '';
                $item['gender'] == 'мужской' ? $item['male']     = 'X' : null;
                $item['gender'] == 'женский' ? $item['female']   = 'X' : null;
                $item['marital_y'] = $item['marital_n'] = $item['marital_d'] = $item['marital_o'] = '';
                $item['marital_'.$item['marital']] = 'X';
                $item['other_on'] = $item['other_off'] = '';
                $item['other_check']  == 'X' ? $item['other_on'] = 'X' : $item['other_off'] = 'X';
                $item['birth_country'] = @$this->app->treeFindBranchById($ctrs, $item['birth_country'])['name'];
                $item['ciexCountry'] = @$this->app->treeFindBranchById($ctrs, $item['ciexCountry'])['data']['fullname'];
                $item['ciexPlace'] = @$this->app->treeFindBranchById($ctrs, $item['ciexPlace'])['name'];
                $item['ciexOutPlace'] = @$this->app->treeFindBranchById($ctrs, $item['ciexOutPlace'])['name'];
                $item['crim_on'] = $item['crim_off'] = '';
                $item['crim_where'] > '' ? $item['crim_on'] = 'X' : $item['crim_off'] = 'X';
                $item['edu_do'] = $item['edu_no'] = $item['edu_oo'] = $item['edu_so'] = '';
                $item['edu_sp'] = $item['edu_bv'] = $item['edu_mv'] = $item['edu_kv'] = '';
                $item['edu_ks'] = $item['edu_ds'] = '';
                $item['edu_'.$item['edu_common']] = 'X';
                $item['edu_'.$item['edu_high']] = 'X';
                $item['edu_'.$item['edu_science']] = 'X';
                break;
            default:
                # code...
                break;
        }


        $fields = $tpl->getVariables();
        foreach ($item as $fld => $val) {
            if (in_array($fld, $fields)) {
                (array)$val === $val ? $tpl->cloneRowAndSetValues($fld, $val) : $tpl->setValue($fld, $val);
            }
        }

        $tpl->saveAs($doc);
        unlink($pdf);
        exec('export HOME='.$path.' && lowriter  --headless  --convert-to pdf --outdir '.$path.' '.$doc);
        unlink($doc);
        header("Content-type:application/json");
        echo json_encode(['path'=>$pdf, 'doc'=>$uri, 'uri'=>$uri."?".wbNewId()]);
    }

    public function senddemo()
    {
        $data = $this->app->vars('_post');
        $tgbot = $this->app->moduleClass('tgbot');

        // Основной бот 5759707566:AAH_TJlE--AWmSw-ny9AOmUp3_LZslcgmDc
        // тестовый 1135435365:AAFHaQHZOXSaY-trfQ1NFWEw8MjgRJwWSs0
        $tgbot->chat_id = '120805934'; 
        $tgbot->chat_id = $data['chat_id'];
        $tgbot->token = '1135435365:AAFHaQHZOXSaY-trfQ1NFWEw8MjgRJwWSs0';
        $file = $this->app->route->path_app . $data['uri'];
        if (!file_exists($file)) {
            return false;
        }
        $dest = dirname($file).'/'.wbNewId().'.pdf';
        $pdf        = new PDF();
        $pagecount    = $pdf->setSourceFile($file);
        for ($i = 1; $i <= $pagecount ; $i++) { //проходимо по всем страницам файла
            $tpl            = $pdf->importPage($i);
            $size            = $pdf->getTemplateSize($tpl);

            $orientation    = $size['orientation'];
            // используем ориантацию и размер исходного файла
            $pdf->AddPage($orientation);
            $pdf->useTemplate($tpl, null, null, $size['width'], $size['height'], true);
           // $pdf->SetXY(21, 90);
            $pdf->SetTextColor(16, 13, 102);
            $pdf->SetAlpha(0.2);
            $pdf->SetFont('Arial', '', 120);
            $pdf->RotatedText(20, 50, 'MIG78.RU', -45);
        }
        $pdf->Output($dest, "F");




        $res = $tgbot->sendDocument($dest);
        unlink($dest);
        header("Content-type:application/json");
        echo json_encode($res);
    }
}
