<?php

class reqlistClass extends cmsFormsClass
{
    private $synapse = 0;
    public $app;

    public function beforeItemShow(&$item) {
        $item['fields'] = count($item['quote']);
    }
}
