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
        $tgbot->chat_id = $this->app->vars('_env.chat_id') > '' ? $this->app->vars('_env.chat_id') : $this->app->vars('_post.chat_id');
        $qid = $this->app->vars('_post.quote');
        $did = $this->app->vars('_post.doc_id');
        $msg = $this->app->vars('_post.msg');
        @$req = $this->app->itemList('reqlist',["filter"=>["id"=>$qid]])['list'];
        $quote = $req ? $req[$qid]['name'] : "";
        (array)$quote === $quote ? $quote = $quote['ru'] : null;
        $res = $tgbot->sendMessage("<b>{$quote}</b> № {$did}:<br>".$msg);
        $res = json_decode($res, true);
        if ($res['ok']) {
            $msg = wbItemSave('messages',[
                'chat_id'=>$tgbot->chat_id,
                'doc_id'=>$did,
                'msg_id'=>wbNewId(),
                'msg'=>$msg,
                'sender'=>'oper',
                'time'=>date('Y-m-d H:i:s')
            ]);
            $res['message'] = $msg;
            
        } else {
            // если по какой-то причине сообщение не отправлено, нужно обработать
        }
        header("Content-type:application/json");
        echo $this->app->jsonEncode($res);
    }

    function getmsg() {
        if ($this->app->vars('_route.params.0')) {
            $chat_id = $this->app->vars('_route.params.0');
            $filter = ['chat_id'=>"{$chat_id}"];
            $this->app->vars('_req.from') ? $filter['time']= ['$gt'=>$this->app->vars('_req.from')] : null;
            $list = $this->app->itemList('messages',['sort'=>'time','return'=>'time,msg,chat_id,doc_id,sender','filter'=>$filter])['list'];
        } else {
            $list = [];
        }
        header("Content-type:application/json");
        echo $this->app->jsonEncode(array_values($list));
    }
}