<?php

class reqlistClass extends cmsFormsClass
{
    private $synapse = 0;
    public $app;

    public function afterItemRead(&$item) {
        $item['flds'] = count($item['fields']);
    }

    function sort() {
        $data = $this->app->vars('_post');
        $res = ['error'=>true];
        foreach($data as $item) {
            if (isset($item['id']) && isset($item['sort']) && $item['sort']>=0) {
                $this->app->itemSave('reqlist',[
                    'id'=>$item['id'],
                    '_sort' => wbSortIndex($item['sort'])
                ]);
                $res = ['error'=>false];
            }
        }
        header("Content-type:application/json");
        echo json_encode($res);
        exit;
    }

}
