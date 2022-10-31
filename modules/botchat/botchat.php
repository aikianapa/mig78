<?php
class modBotchat
{
    public function __construct(&$dom)
    {
        set_time_limit(600);
        $this->app = &$dom->app;
        $this->dom = &$dom;
        $this->init();
    }

    function init() {
        $out = $this->app->fromFile(__DIR__.'/botchat_ui.php');
        $this->dom->after($out);
        $this->dom->remove();
    }
}