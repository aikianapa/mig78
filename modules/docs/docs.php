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
        $docs = $this->app->formClass('docs');
        $path = $this->app->vars('_route.path_app').'/uploads';
        $file = $this->app->vars('_route.path_app').'/tpl/docs/'.$this->post['quote'].'.docx';
        $doc = $path.'/test.docx';
        $pdf = $path.'/test.pdf';
        $tpl = new TemplateProcessor($file);
        $item = $this->post;
        $docs->beforeItemShow($item);
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