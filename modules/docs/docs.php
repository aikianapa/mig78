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

        @$req = $this->app->itemRead('reqlist',$this->post['quote'])['list'];
        $docs = $this->app->formClass('docs');
        $uri = "/uploads/docs";
        $path = $this->app->vars('_route.path_app').$uri;

        @$ctrs = $this->app->treeRead('countries')['tree']['data'];
        @$locs = $this->app->treeRead('locations')['tree']['data'];
        @$mari = $this->app->treeRead('marital_status')['tree']['data'];

        if (@$req['template'][0]['img'] > '') {
            $file = urldecode($req['template'][0]['img']);
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

                $item['male'] = $item['female'] = '';
                $item['gender'] == 'мужской' ? $item['male']     = 'X' : null;
                $item['gender'] == 'женский' ? $item['female']   = 'X' : null;

        switch ($this->post['quote']) {
            case 'regspr':
                $item['doc_vnj'] = $docs->getDocument($item, 'vnj');
                $item['doc_rvp'] = $docs->getDocument($item, 'rvp');
                $item['outgoing'] = $docs->getArrOutgoing($item);
                $docs->beforeItemShow($item);
                break;
            case 'vnj':
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
            case 'rvp_quota':
                $item['regionrf'] = @$this->app->treeFindBranchById($locs, $item['regionrf'])['name'];
                $item['marital_y'] = $item['marital_n'] = $item['marital_d'] = $item['marital_o'] = '';
                $item['marital_'.$item['marital']] = 'X';
                $item['birth_country'] = @$this->app->treeFindBranchById($ctrs, $item['birth_country'])['name'];
                $item['ciexCountry'] = @$this->app->treeFindBranchById($ctrs, $item['ciexCountry'])['data']['fullname'];
                $item['ciexPlace'] = @$this->app->treeFindBranchById($ctrs, $item['ciexPlace'])['name'];

                if ($item['ciexOutPlace'] > '') {
                    if ($item['ciexOut_check'] =='X') {
                        $item['ciexOut_check'] = "Без гражданства:";
                    } else {
                        $item['ciexOut_check'] = "Прекращено:";
                    }
                }
                // Родственники
                $item['fam_on'] = $item['fam_off'] = '';
                $item['family'][0]['name'] > '' ? $item['fam_on'] = 'X' : $item['fam_off'] = 'X';
                $item['fam_on'] == 'X' ? null : $item['family'] = [['stage'=>'','name'=>'','birth'=>'','citizen'=>'','address'=>'']];
                // ----------- в РФ
                $item['rf_famon'] = $item['rf_famoff'] = '';
                $item['rf_family'][0]['rf_name'] > '' ? $item['rf_famon'] = 'X' : $item['rf_famoff'] = 'X';

                // Образование
                $item['e1'] = $item['e2'] = $item['e3'] = $item['e4'] = $item['e5'] = $item['e6'] = '';
                trim($item['education_out_text']) > ' ' ? $item['e1'] = 'X' : $item['e2'] = 'X';
                trim($item['education_in_text']) > ' ' ? $item['e3'] = 'X' : null;
                trim($item['education_end_text']) > ' ' ? $item['e4'] = 'X' : null;
                trim($item['education_other_text']) > ' ' ? $item['e6'] = 'X' : null;
                $item['e3'] == 'X' || $item['e4'] = 'X' ? $item['e5'] = '' : $item['e5'] = $item['education_off_check'];
                // Работа
                $item['jobon'] = '';
                $item['joboff'] = 'X';
                foreach($item['jobplace'] as &$job) {
                    if ($job['date_in'] > ' ') {
                        $item['joboff'] = '';
                        $item['jobon'] = 'X';
                        $job['date_in'] = date('m.Y', strtotime($job['date_in']));
                        $job['date_out'] = date('m.Y', strtotime($job['date_out']));
                    }
                }
                $item['jobskon'] = $item['jobskoff'] = '';
                (trim($item['jobskill_text']) > ' ' ) ? $item['jobskon'] = 'X' : $item['jobskoff'] = 'X';
                // Источники дохода
                $item['incon'] = ''; $item['incoff'] = '';
                (trim($item['incomes_text']) > ' ') ? $item['incon'] = 'X' : $item['incoff'] = 'X';
                // Жильё в РФ
                $item['propon'] = $item['propoff'] = '';
                (trim($item['property_text']) > ' ') ? $item['propon'] = 'X' : $item['propoff'] = 'X';
                // Судимость
                $item['crim_on'] = $item['crim_off'] = '';
                $item['crim_where'] > '' ? $item['crim_on'] = 'X' : $item['crim_off'] = 'X';
                // Административка
                $item['admr_on'] = $item['admr_off'] = '';
                $item['admresp_text'] > '' ? $item['admr_on'] = 'X' : $item['admr_off'] = 'X';
                // 
                trim($item['feedback_text']) > ' ' ? null : $item['feedback_text'] = $item['email'];
                $item['prev_on'] = $item['prev_off'] = '';
                $item['prev_text'] > '' ? $item['prev_on'] = 'X' : $item['prev_off'] = 'X';
                // Законный представитель
                $item['owner_prevname'] = $docs->getPrevname($item, 'ownoth');
                $item['owner_fullname'] = $docs->getFullname($item, 'owner');
                $item['owner_address'] = $docs->getAddress($item, 'owner');
                $item['owner_doc'] = $docs->getPassport($item, 'owner');
                $item['owner_gender'] = $item['owner_gender'] == "М" ? "мужской" : "женский";
                $item['owner_citizen'] = $docs->getCitizen($item, 'owner');
                break;
            case 'zayavl_rvp':
                $item['prevname'] = $docs->getPrevname($item, 'other');
                $item['passport'] = $docs->getPassport($item);
                $item['birth_country'] = @$this->app->treeFindBranchById($ctrs, $item['birth_country'])['name'];
                // Гражданство
                $item['citizen'] = $docs->getCitizen($item);
                $item['marital'] = @$this->app->treeFindBranchById($mari, $item['marital'])['name'];
                $item['criminal'] = $docs->getCriminal($item);
                $item['basis_year'] == '' ? $item['basis_year'] = date('Y') : null;
                $item['basis_quote_on'] = 'в пределах квоты, установлен на '.$item['basis_year'].' год';
                $item['basis_quote_off'] = 'без учета квоты';
                if ($item['basis_check'] == 'X') {
                    $item['basis_quote_off'] = $this->setStyle($item['basis_quote_off'], 'strike');
                } else {
                    $item['basis_quote_on'] = $this->setStyle($item['basis_quote_on'], 'strike');
                }
            case 'zayvl_rvp_do18':

                $item['basis_year'] == '' ? $item['basis_year'] = date('Y') : null;
                $item['basis_quote_on'] = 'в пределах квоты, установлен на '.$item['basis_year'].' год';
                $item['basis_quote_off'] = 'без учета квоты';

                if ($item['basis_check'] == 'X') {
                    $item['basis_quote_off'] = $this->setStyle($item['basis_quote_off'], 'strike');
                } else {
                    $item['basis_quote_on'] = $this->setStyle($item['basis_quote_on'], 'strike');
                }

                $item['prevname'] = $docs->getPrevname($item, 'other');
                $item['criminal'] = $docs->getCriminal($item);
                $item['citizen'] = $docs->getCitizen($item);
                $item['birth_country'] = @$this->app->treeFindBranchById($ctrs, $item['birth_country'])['name'];

                $item['parent'] = $docs->getFullname($item, 'parent');
                $item['parentprev'] = $docs->getPrevname($item, 'parentprev');
                $item['parent_passport'] =$docs->getPassport($item, 'parent');
                $item['parent_birth_country'] = @$this->app->treeFindBranchById($ctrs, $item['parent_birth_country'])['name'];
                $item['parent_gender'] = $item['parent_gender'] == "М" ? "мужской" : "женский";

                $item['rvp'] = $docs->getDocument($item, 'rvp');
                $item['vnj'] = $docs->getDocument($item, 'vnj');
                $who = explode('/', 'сыну/дочери/усыновленному ребенку/лицу');
                foreach($who as &$val) {
                    $item['custody'] == 'son' && $val !== 'сыну' ? $val = $this->setStyle($val, 'strike') : null;
                    $item['custody'] == 'daughter' && $val !== 'дочери' ? $val = $this->setStyle($val, 'strike') : null;
                    $item['custody'] == 'adopted' && $val !== 'усыновленному ребенку' ? $val = $this->setStyle($val, 'strike') : null;
                    $item['custody'] == 'custody' && $val !== 'лицу' ? $val = $this->setStyle($val, 'strike') : null;
                }
                $item['who'] = implode('/', $who);
                break;
        }
        $fields = $tpl->getVariables();
        foreach ($item as $fld => $val) {
            if (in_array($fld, $fields)) {
                (array)$val === $val ? $tpl->cloneRowAndSetValues($fld, $val) : $tpl->setValue($fld, $val);
            }
        }
        $tpl->saveAs($doc);
                \PhpOffice\PhpWord\Settings::setOutputEscapingEnabled(true);

        unlink($pdf);
        exec('export HOME='.$path.' && lowriter  --headless  --convert-to pdf --outdir '.$path.' '.$doc);
        unlink($doc);
        header("Content-type:application/json");
        echo json_encode(['path'=>$pdf, 'doc'=>$uri, 'uri'=>$uri."?".wbNewId()]);
    }

    public function setStyle($val, $style) {
        return $val = "</w:t></w:r><w:r><w:rPr><w:{$style}/></w:rPr><w:t xml:space='preserve'>".$val."</w:t></w:r><w:r><w:t>";
    }

    public function pay() {
        $data = ['get'=> $this->app->vars('_get'),'post'=> $this->app->vars('_post')];
        file_put_contents(__DIR__.'/pay_'.date("j.n.Y").'.log', json_encode($data)."\n\r", FILE_APPEND);
    }
    public function senddoc()
    {
        $data = $this->app->vars('_post');

        $file = $this->app->route->path_app . $data['uri'];
        if (!file_exists($file)) {
            return false;
        }

        $tgbot = $this->app->moduleClass('tgbot');
        $tgbot->chat_id = $this->app->vars('_env.chat_id') > '' ? $this->app->vars('_env.chat_id') : $this->app->vars('_post.chat_id');
        $tgbot->token = $_ENV['bot_id'];

        $lang = 'ru';

        if ($this->app->vars('_post.demo')>'') {
            $dest = dirname($file).'/'.wbNewId().'.pdf';
            $pdf        = new PDF();
            $pagecount    = $pdf->setSourceFile($file);
            for ($i = 1; $i <= $pagecount ; $i++) { //проходимо по всем страницам файла
                $tpl            = $pdf->importPage($i);
                $size            = $pdf->getTemplateSize($tpl);
                $orientation    = $size['orientation'];
                $pdf->AddPage($orientation);
                $pdf->useTemplate($tpl, null, null, $size['width'], $size['height'], true);
                $pdf->SetTextColor(16, 13, 102);
                $pdf->SetAlpha(0.2);
                $pdf->SetFont('Arial', '', 120);
                $pdf->RotatedText(20, 50, 'MIG78.RU', -45);
            }
            $pdf->Output($dest, "F");

            $text = botmsg('docdemo', $lang, ['id'=>$data['id'], 'doc' => $data['doc']]);

            $btns[] =['text'=>'да', 'callback_data'=>"document:{$data['id']}:yes"];
            $btns[] =['text'=>'нет', 'callback_data'=>"document:{$data['id']}:no"];

            $keyboard = [
                'resize_keyboard' => true,
                //'one_time_keyboard' =>true,
                'inline_keyboard' => [
                    $btns
                ]
            ];

            $text = botmsg('docdemo', $lang, ['id'=>$data['id'], 'doc' => $data['doc']]);
            $msg = [
                'text' => $text,
                'reply_markup' => json_encode($keyboard)
            ];
        } else {
            $dest = $file;
            $msg = botmsg('docready', $lang, ['id'=>$data['id'], 'doc' => $data['doc']]);
        }

        $res = $tgbot->sendDocument($dest);
        $chk = json_decode($res);
        if (isset($chk->ok) && $chk->ok == true) {
            $res = $tgbot->send('sendMessage', $msg);
        }

        unlink($dest);
        header("Content-type:application/json");
        echo $res;
        exit;
    }
}
