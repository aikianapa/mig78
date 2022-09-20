<?php

class docsClass extends cmsFormsClass
{
    public function beforeItemSave(&$item)
    {
        $item['reg_city_type'] = strtolower($item['reg_city_type']);
        $item['reg_street_type'] = strtolower($item['reg_street_type']);
        $item['reg_city'] = ucfirst($item['reg_city']);
        $item['reg_street'] = ucfirst($item['reg_street']);
        $item['checksum'] = $this->checksum($item);
        $data = $this->app->Dot($item);
        $data->get('order.0.img') > '' and $data->get('code') > '' ? $item['status'] = 'ready' : null;
        if ($data->get('fullname') == '' && $data->get('first_name')>'') {
            $data->set('fullname', implode(' ', [$data->get('last_name'),$data->get('first_name'),$data->get('middle_name')]));
        }
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
        if ($data->get('sign_num') =='' && $data->get('employer') > '') {
            $emplr = $this->app->itemRead('employers', $data->get('employer'));
            $year = date('y');
            $start = ($year == 22 && (isset($emplr['sign_start']))) ? intval($emplr['sign_start']) : 0;
            $ai = $this->app->module('autoinc');
            $counter=$data->get('employer').'_'.$year;
            $item['sign_num'] = $ai->inc('sign_num', $counter, $start);
        }
        if ($data->get('reg_street') =='' && $data->get('place') > '') {
            $place = $this->app->itemRead('places', $data->get('place'));
            foreach ($place as $k => $v) {
                substr($k, 0, 4) == 'reg_' ? $item[$k] = $v : null;
            }
        }
        if (!isset($item['sources'])) {
            $item['sources'] = [];
        }

        //if ($item['reg_flag'] == '' && count($item['sources']) == 4)  $this->genRegCard($item);
        if (count($item['sources']) == 4) {
            $this->genRegCard($item);
        }
    }

    public function afterItemSave(&$item)
    {
        // wbItemRemove('scans',$item['id']);
    }


    public function afterItemRead(&$item)
    {
        $item ? null : $item=(array)$item;
        $data = $this->app->Dot($item);
        $data->get('phone') ? $item['phone'] = wbDigitsOnly(str_replace('+7', '8', $item['phone'])) : null;
        $data->get('phone_alt') ? $item['phone_alt'] = wbDigitsOnly(str_replace('+7', '8', $item['phone_alt'])) : null;
        $data->get('status') ? null : $item['status'] = 'new';
        $data->get('source.0.img') > '' or $data->get('code') > '' ? $item['status'] = 'progress' : null;
        $data->get('order.0.img') > '' and $data->get('code') > '' ? $item['status'] = 'ready' : null;
        $data->get('archive') == 'on' ? $item['status'] = 'archive' : null;
        $data->get('date_out') == '' ? $data->set('date_out', $data->get('mc_expire')) : null;
        isset($item['_created']) ? null : $item['_created'] = date('Y-m-d');
        $item['date'] = date('Y-m-d', strtotime($item['_created']));
        $item['pasp'] = preg_replace('/[^a-zA-Z0-9]/ui', '', $data->get('doc_ser').$data->get('doc_num'));
        if ($data->get('fullname') > '' && $data->get('last_name') == '') {
            $tmp = explode(' ', $data->get('fullname'));
            isset($tmp[0]) ? $data->set('last_name', $tmp[0]) : null;
            isset($tmp[1]) ? $data->set('first_name', $tmp[1]) : null;
            unset($tmp[0]);
            unset($tmp[1]);
            $tmp = implode(' ', $tmp);
            $data->set('middle_name', $tmp);
        } elseif ($data->get('fullname') == '' && $data->get('first_name')>'') {
            $data->set('fullname', implode(' ', [$data->get('last_name'),$data->get('first_name'),$data->get('middle_name')]));
        }
        if ($this->app->vars('_route.action') == 'rep_reg') {
            $item['month'] = wbDate('Y-m', $item['_created']);
            $item['day'] = wbDate('d', $item['_created']);
            $item['items'] = 1;
        }
        if (in_array($this->app->vars('_route.action'), ['list','oper']) && $data->get('_creator') >'') {
            $user = $this->app->itemRead('users', $data->get('_creator'));
            $item['_role'] = isset($user['role']) ? $user['role'] : '';
            if ($data->get('order.0.img') > '' && in_array($item['status'], ['archive','ready'])) {
                $order = $this->app->vars('_env.path_app').$data->get('order.0.img');
                if (!is_file($order)) {
                    $item['status'] = 'error';
                }
            }
        }
    }

    public function beforeItemShow(&$item)
    {
        if ($this->app->vars('_route.action') !== 'edit') {
            $item ? null : $item=(array)$item;
            $data = $this->app->Dot($item);
            $item['pasp'] = preg_replace('/[^a-zA-Z0-9]/ui', '', $data->get('doc_ser').$data->get('doc_num'));
            if ($data->get('fullname') > '' && $data->get('last_name') == '') {
                $tmp = explode(' ', $data->get('fullname'));
                isset($tmp[0]) ? $data->set('last_name', $tmp[0]) : null;
                isset($tmp[1]) ? $data->set('first_name', $tmp[1]) : null;
                unset($tmp[0]);
                unset($tmp[1]);
                $tmp = implode(' ', $tmp);
                $data->set('middle_name', $tmp);
            } elseif ($data->get('fullname') == '' && $data->get('first_name')>'') {
                $data->set('fullname', implode(' ', [$data->get('last_name'),$data->get('first_name'),$data->get('middle_name')]));
            }
            $data->get('reg_corpse') > ' ' ? $item['reg_corpse'] = 'корп.'.$item['reg_corpse'] : null;
            $data->get('reg_build') > '' ? $data->set('reg_corpse', $data->get('reg_corpse').', стр. '.$data->get('reg_build')) : null; // Корпус + строение
            $data->set('reg_house', trim($data->get('reg_house').' '.$data->get('reg_house_num'))); // тип дома + номер дома
            $data->set('reg_flat', trim($data->get('reg_flat').' '.$data->get('reg_flat_num'))); // тип квартиры + номер квартиры

            $item['birth_date'] = wbDate('d.m.Y', $item['birth_date']);
            $item = $data->get();
        }
        return $item;
    }


    public function beforeItemRemove(&$item)
    {
        foreach ($item['attaches'] as $atc) {
            unlink($this->app->route->path_app.'/'.$atc['img']);
        }
        foreach ($item['sources'] as $atc) {
            unlink($this->app->route->path_app.'/'.$atc['img']);
        }
        unlink($this->app->route->path_app.'/'.$item['order'][0]['img']);
    }

    public function export()
    {
        $data = $this->app->vars('_post');
        $doc = file_get_contents($this->app->vars('_route.path_app').'/tpl/docs/'.$data['quote'].'.pdf');
        $doc = $this->app->setValuesStr($doc, $data);
        file_put_contents($this->app->vars('_route.path_app').'/uploads/test.pdf', $doc);
        echo json_encode(['path'=>'/uplads/test.pdf']);
    }

    public function fldsetsel()
    {
        $path = $this->app->route->path_app.'/blocks/fldset';
        $list = scandir($path);
        $result = [];
        foreach ($list as $i => &$item) {
            $fname = $path.'/'.$item;
            if (is_file($fname)) {
                $fldset = $this->app->fromFile($fname);
                $header = $fldset->find('fieldset')->attr('header');
                if ($header == '') {
                    $header = $item;
                }
                $result[] = ['name'=>substr($item, 0, -4),'header'=>$header];
            }
        }
        header("Content-type:application/json");
        return json_encode($result);
    }

    public function fldsetgen()
    {
        $path = $this->app->route->path_app.'/blocks/fldset';
        @$name = $this->app->route->item;
        @$docs = $this->app->treeRead('reqlist')['tree']['data'];
        $doc = $this->app->treeFindBranchById($docs, $name);
        $result = '';
        foreach ($doc['data']['fields'] as $i => &$item) {
            $fname = $path.'/'.$item['fldset'].'.php';
            $fldset = $this->app->fromFile($fname);
            if ($item['required'] == 'on') {
                $fldset->find('input,textarea,select')->find(':not([type=hidden]):not([optional])')->attr('required', true);
            }
            if ($item['label'] > '') {
                if ($fldset->find('input,textarea,select')->length == 1) {
                    $fldset->find('label')->inner($item['label']);
                    $fldset->find('[placeholder]')->attr('placeholder',$item['label']);
                } else {
                    $fldset->find('fieldset')->prepend('<div class="divider-text col-12">'.$item['label'].'</div>');
                }
            }
            if ($item['prefix'] > '') {
                $flds = $fldset->find('input,textarea,select');
                foreach($flds as $fld) {
                    $name = $item['prefix']. '_' . $fld->attr('name');
                    $fld->attr('name', $name);
                }

            }
            $fldset->fetch();
            $result .= "\n\r".$fldset->html();
        }
        echo $result;
    }
}
