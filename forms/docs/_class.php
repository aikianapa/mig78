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
    }

    public function beforeItemShow(&$item)
    {
        if ($this->app->vars('_route.action') !== 'edit') {
            $item ? null : $item=(array)$item;
            $item = $this->commonFormat($item);
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
            $data->get('gender') == 'М' ? $data->set('gender', 'мужской') : null;
            $data->get('gender') == 'Ж' ? $data->set('gender', 'женский') : null;
            $data->set('address', $this->getAddress($data));
            $data->set('passport', $this->getPassport($data));
            $item = $data->get();
        }
        return $item;
    }

    function commonFormat(&$item) {
        foreach($item as $fld => $val) {
                if ((array)$val === $val) {
                    $item[$fld] = $this->commonFormat($val);
                } else {
                    if (validateDate($val,'Y-m-d')) {
                        $item[$fld] = wbDate('d.m.Y', $item[$fld]);
                    } else if (strpos(' '.$fld,'check') && $val == 'on') {
                        $item[$fld] = "X";
                    }
                }
        }
        return $item;
    }

    function getAddress($data, $prefix = null) {
            $prefix = $prefix == null ? '' : $prefix.'_';
            $data->get($prefix.'reg_corpse') > ' ' ? $data->set($prefix.'reg_corpse', 'корп.'.$data->get($prefix.'reg_corpse')) : null;
            $data->get($prefix.'reg_build') > '' ? $data->set($prefix.'reg_corpse', $data->get($prefix.'reg_corpse').', стр. '.$data->get($prefix.'reg_build')) : null; // Корпус + строение
            $data->set($prefix.'reg_house', trim($data->get($prefix.'reg_house').' '.$data->get($prefix.'reg_house_num'))); // тип дома + номер дома
            $data->set($prefix.'reg_flat', trim($data->get($prefix.'reg_flat').' '.$data->get($prefix.'reg_flat_num'))); // тип квартиры + номер квартиры
            $data->get($prefix.'reg_city') > ' ' ? $data->set($prefix.'reg_city', $data->get($prefix.'reg_city_type').$data->get($prefix.'reg_city')) : null;
            $address = [];
            $data->get($prefix.'region') > '' ? $address[] = $data->get($prefix.'region') : null;
            $data->get($prefix.'reg_city') > '' ? $address[] = $data->get($prefix.'reg_city') : null;
            $data->get($prefix.'reg_street') > '' ? $address[] = $data->get($prefix.'reg_street') : null;
            $data->get($prefix.'reg_house') > '' ? $address[] = $data->get($prefix.'reg_house') : null;
            $data->get($prefix.'reg_corpse') > '' ? $address[] = $data->get($prefix.'reg_corpse') : null;
            $data->get($prefix.'reg_flat') > '' ? $address[] = $data->get($prefix.'reg_flat') : null;
        return implode(', ',$address);
    }

    function getPassport($data, $prefix = null) {
        $prefix = $prefix == null ? '' : $prefix.'_';
        $passport = [];
        $data->get($prefix.'doc_type') > '' ? $passport[] = $data->get($prefix.'doc_type') : null;
        $data->get($prefix.'doc_ser') > '' ? $passport[] = 'серия '. $data->get($prefix.'doc_ser') : null;
        $data->get($prefix.'doc_num') > '' ? $passport[] = '№ '. $data->get($prefix.'doc_num') : null;
        $data->get($prefix.'doc_date') > '' ? $passport[] = 'выдан '. $data->get($prefix.'doc_date') : null;
        $data->get($prefix.'doc_who') > '' ? $passport[] = $data->get($prefix.'doc_who') : null;
        return implode(' ', $passport);
    }

    function getDocument($item, $prefix = null) {
        $data = ((array)$item === $item) ? $this->app->Dot($item) : $item;
        $prefix = $prefix == null ? '' : $prefix.'_';
        $document = [];
        $data->get($prefix.'dname') > '' ? $document[] = $data->get($prefix.'dname') : null;
        $data->get($prefix.'dser') > '' ? $document[] = 'серия '. $data->get($prefix.'dser') : null;
        $data->get($prefix.'dnum') > '' ? $document[] = '№ '. $data->get($prefix.'dnum') : null;
        $data->get($prefix.'ddate') > '' ? $document[] = 'выдан '. $data->get($prefix.'ddate') : null;
        $data->get($prefix.'dwho') > '' ? $document[] = $data->get($prefix.'dwho') : null;
        $data->get($prefix.'dexpire') > '' ? $document[] = 'истекает '. $data->get($prefix.'dexpire') : null;
        return implode(' ', $document);
    }


    function getArrOutgoing($item, $prefix = null)
    {
        @$ctrs = $this->app->treeRead('countries')['tree']['data'];
        $data = ((array)$item === $item) ? $this->app->Dot($item) : $item;
        $prefix = $prefix == null ? '' : $prefix.'_';
        $list = (array)$data->get($prefix.'outgoing');
        foreach($list as $key => &$vals) {
            if ($vals['country'] == '') {
                break;
            }
            $vals['country'] = $this->app->treeFindBranchById($ctrs, $vals['country'])['name'];
            $vals['days'] = getPeriod($vals['date_out'], $vals['date_in']);
        }
        $data->set($prefix.'outgoing', $list);
        return $list;
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
        @$scid = $this->app->vars('_post.scan_id');
        @$data = $this->app->itemRead('scans', $scid);
        $doc = $this->app->treeFindBranchById($docs, $name);
        $result = '';
        foreach ($doc['data']['fields'] as $i => &$item) {
            $fname = $path.'/'.$item['fldset'].'.php';
            $fldset = $this->app->fromFile($fname);
            if ($item['required'] == 'on') {
                $fldset->find('input')->find('input:not([type=hidden]):not([optional])')->attr('required', true);
                $fldset->find('textarea')->find('textarea:not([type=hidden]):not([optional])')->attr('required', true);
                $fldset->find('select')->find('select:not([type=hidden]):not([optional])')->attr('required', true);


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
            $fldset->fetch($data);
            $result .= "\n\r".$fldset->html();
        }
        echo $result;
    }
}
