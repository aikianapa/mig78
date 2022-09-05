<?php

class modWssrv
{
    public function __construct(&$dom = null)
    {
        $app = $dom->app;
        $ui = $app->fromFile(__DIR__.'/wssrv_ui.php');
        $ui->fetch((array)$dom->params);
        $inner = $app->fromString($dom->inner());
        $dom->after($ui->outer()."\r\n".$inner->outer());
        $dom->remove();
    }
}

?>