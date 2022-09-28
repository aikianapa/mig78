<?php
require $_SERVER['DOCUMENT_ROOT'].'/vendor/autoload.php';

use PhpOffice\PhpWord\IOFactory;
use PhpOffice\PhpWord\TemplateProcessor;

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
        if (method_exists($this,$mode)) {
            $this->$mode();
            exit;
        }
    }

    function quote() {
        if ($this->post['quote'] == '') {
            return;
        }

        @$req = $this->app->treeRead('reqlist')['tree']['data'];
        $req = $this->app->treeFindBranchById($req, $this->post['quote']);
        $docs = $this->app->formClass('docs');
        $path = $this->app->vars('_route.path_app').'/uploads';
        @$ctrs = $this->app->treeRead('countries')['tree']['data'];
        if (@$req['data']['template'][0]['img'] > '') {
            $file = urldecode($req['data']['template'][0]['img']);
            $file = $this->app->vars('_route.path_app').$file;
        } else {
            $file = $this->app->vars('_route.path_app').'/tpl/docs/'.$this->post['quote'].'.docx';
        }
        $doc = $path.'/test.docx';
        $pdf = $path.'/test.pdf';
        $tpl = new TemplateProcessor($file);
        $item = $this->post;
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
                break;
            default:
                # code...
                break;
        }


        $fields = $tpl->getVariables();
        foreach($item as $fld => $val) {
            if (in_array($fld, $fields)) {
                (array)$val === $val ? $tpl->cloneRowAndSetValues($fld, $val) : $tpl->setValue($fld, $val);
            }
        }

        $tpl->saveAs($doc);
        unlink($pdf);
        exec('export HOME='.$path.' && lowriter  --headless  --convert-to pdf --outdir '.$path.' '.$doc);
        unlink($doc);
        header("Content-type:application/json");
        echo json_encode(['path'=>'/uploads/test.pdf?'.wbNewId()]);
    }

}
?>