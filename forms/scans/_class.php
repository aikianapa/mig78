<?php

class scansClass extends cmsFormsClass
{
    private $synapse = 0;
    public $app;
    public function list()
    {
        $out = $this->app->fromFile(__DIR__.'/list.php');
        $out->fetch();
        echo $out->outer();
    }

    public function afterItemRemove()
    {
        // при удалении записи нужно обработать исключение
        // когда запись удаляется при переносе в docs
    }

    public function afterItemRead(&$item)
    {
        if (!$item) {
            return $item;
        }
        $data = $this->app->Dot($item);

        $fullname = implode(' ', [$data->get('last_name'),$data->get('first_name'),$data->get('middle_name')]);
        if ($data->get('fullname') > '' && $fullname !== $data->get('fullname')) {
            $tmp = explode(' ', $data->get('fullname'));
            isset($tmp[0]) ? $data->set('last_name', $tmp[0]) : $data->set('last_name', '');
            isset($tmp[1]) ? $data->set('first_name', $tmp[1]) : $data->set('first_name', '');
            $middlename = '';
            foreach ($tmp as $i => $v) {
                if ($i>1) {
                    $middlename .= $v.' ';
                }
            }
            $data->set('middle_name', trim($middlename));
        }

        if ($data->get('sources.0') > ''
        && $data->get('sources.1') > '') {
            $data->set('active', 'on');
        } else {
            $data->set('active', '');
        }
        $item['doc_sernum'] = $item['doc_ser'].' '.$item['doc_num'];
        $item['srclen'] = isset($item['sources']) ? count((array)$item['sources']) : 0;
    }

    public function todocs()
    {
        if ($this->app->vars('_post.id') > '') {
            $item=$this->app->itemRead('scans', $this->app->vars('_post.id'));
            $item['_form'] = $item['_table'] = 'docs';
            $item['status'] = 'new';
            $item['operator'] = $this->app->vars('_sess.user.id');
            $item = $this->app->itemSave('docs', $item);
            if ($item) {
                $this->app->itemRemove('scans', $item['id']);
            }
            // Отправляем сообщение клиенту
            $tgbot = $this->app->moduleClass('tgbot');
            isset( $_ENV['chat_id']) ? $tgbot->chat_id = $_ENV['chat_id'] : null;
            $tgbot->token = $_ENV['bot_id'];
            $res = $tgbot->sendMessage('Ваш запрос принят в работу. Идентификатор заказа: '.$item['id']);
            // =============================
            header("Content-type:application/json");
            return ['error'=>false, 'msg'=>'', 'data'=>$item, 'bot'=>$res];
        } else {
            return ['error'=>true, 'msg'=>'Ошибка'];
        }
    }
    public function block()
    {
        $block = wbItemRead('tmp', 'blockedscans');
        $block ? null : $block = ['_id'=>'blockedscans','blocks'=>[]];
        if ($this->app->vars('_post.id') > '') {
            $block['blocks'][$this->app->vars('_post.id')] = date('Y-m-d H:i:s');
            $block = wbItemSave('tmp', $block, true);
        }
        header("Content-type:application/json");
        return ['msg'=>'scanblocks','blocks'=>array_keys($block['blocks'])];
    }

    public function unblock()
    {
        $block = wbItemRead('tmp', 'blockedscans');
        $block ? null : $block = ['_id'=>'blockedscans','blocks'=>[]];
        if ($this->app->vars('_post.id') > '') {
            if (isset($block['blocks'][$this->app->vars('_post.id')])) {
                unset($block['blocks'][$this->app->vars('_post.id')]);
            }
            $block = wbItemSave('tmp', $block, true);
        }
        header("Content-type:application/json");
        return ['msg'=>'scanblocks','blocks'=>array_keys($block['blocks'])];
    }

    public function getblock()
    {
        $block = wbItemRead('tmp', 'blockedscans');
        $block ? null : $block = ['_id'=>'blockedscans','blocks'=>[]];
        foreach ($block['blocks'] as $id => $time) {
            // тут бы удалить из блока записи, которым более получаса
            if (time() > strtotime($time.'+10 min')) {
                unset($block['blocks'][$id]);
            }
        }
        $block = wbItemSave('tmp', $block, true);
        header("Content-type:application/json");
        return ['msg'=>'scanblocks','blocks'=>array_keys($block['blocks'])];
    }
}
