<?php

class reqlistClass extends cmsFormsClass
{
    private $synapse = 0;
    public $app;

    public function afterItemRead(&$item) {
        $item['flds'] = count($item['fields']);
    }
}
