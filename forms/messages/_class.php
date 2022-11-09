<?php
class messagesClass extends cmsFormsClass {

    function afterItemRead(&$item) {
        @$did = $item['doc_id'];
        $item['oper_id'] = $did ? $this->app->correlation("docs", $did, 'oper') : null;
    }
}