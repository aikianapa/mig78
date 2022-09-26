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
                $docs->beforeItemShow($item);
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