<?php
class messagesClass extends cmsFormsClass {

    function afterItemRead(&$item) {
        @$did = $item['doc_id'];
        $item['oper_id'] = $did ? $this->app->correlation("docs", $did, 'oper') : null;
        $item['quote'] = $did ? $this->app->correlation("docs", $did, 'quote') : null;
        $item['quote'] = $did ? $this->app->correlation("reqlist", $item['quote'], 'name') : null;

        if ((array)$item['quote'] === $item['quote']) {
            @$item['quote'] = isset($item['quote'][$_SESSION['lang']]) ? $item['quote'][$_SESSION['quote']] : $item['quote']['ru'];
        }

    }
}