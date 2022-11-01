<?php
class modBotchat
{
    public function __construct(&$obj)
    {
        set_time_limit(600);
        if (strtolower(get_class($obj)) == 'wbapp') {
            $this->app = &$obj;
        } else {
            $this->app = &$obj->app;
            $this->dom = &$obj;
            $this->init();
        }
    }

    function init() {
        $out = $this->app->fromFile(__DIR__.'/botchat_ui.php');
        $this->dom->after($out);
        $this->dom->remove();
    }

    function sendmsg()
    {
        $tgbot = $this->app->moduleClass('tgbot');
        $qid = $this->app->vars('_post.quote');
        $did = $this->app->vars('_post.doc_id');
        $msg = $this->app->vars('_post.msg');
        @$req = $this->app->itemList('reqlist',["filter"=>["id"=>$qid]])['list'];
        $quote = $req ? $req[$qid]['name'] : "";
        (array)$quote === $quote ? $quote = $quote['ru'] : null;
        $tgbot->chat_id = $this->app->vars('_env.chat_id') > '' ? $this->app->vars('_env.chat_id') : $this->app->vars('_post.chat_id');
        $res = $tgbot->sendMessage("<b>{$quote}</b> № {$did}:<br>".$msg);
        header("Content-type:application/json");
        echo $res;
    }

}