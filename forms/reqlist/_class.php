<?php

class reqlistClass extends cmsFormsClass
{
    private $synapse = 0;
    public $app;

    public function afterItemRead(&$item) {
        $item['flds'] = count($item['fields']);
    }
    function sort()
    {
        $data = $this->app->vars('_post');
        $res = ['error'=>true];
        foreach ($data as $sort => $item) {
            $this->app->itemSave('reqlist', [
                    'id'=>$item,
                    '_sort' => wbSortIndex($sort)
                ], false);
            $res = ['error'=>false];
        }
        $this->app->tableFlush('reqlist');
        header("Content-type:application/json");
        echo json_encode($res);
        exit;
    }
}
