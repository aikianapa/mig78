<?php

class docsClass extends cmsFormsClass
{
    public $mon;
    public $loc;
    public $app;
    public function beforeItemSave(&$item)
    {
        if (!isset($item['sources'])) {
            $item['sources'] = [];
        }

            if ($this->app->vars('_route.controller') == 'module' && $this->app->vars('_route.module') == 'api') {
                $data = $this->app->itemRead('docs', $item['_id']);
                $item = array_merge($data, $item);
            } 

        if ($item['payed'] == 'on' && $item['status'] !== 'ready') {


            @$req = $this->app->treeRead('reqlist')['tree']['data'];
            $req = $this->app->treeFindBranchById($req, $item['quote']);
            isset($_ENV['chat_id']) ? $chat_id = $_ENV['chat_id'] : $chat_id = $item['chat_id'];
            $res = $this->app->authPostContents($this->app->vars('_route.host').'/module/docs/senddoc', [
                'id' => $item['id'],
                'chat_id' => $chat_id,
                'uri' => $item['document'],
                'doc' => $req['name']
            ]);
            if ($res['ok'] == true) {
                $item['status'] = 'ready';
                $item['payed'] = 'on';
            }
            print_r($res);
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

        $item['reg_city_type'] = strtolower($item['reg_city_type']);
        $item['reg_street_type'] = strtolower($item['reg_street_type']);
        $item['reg_city'] = ucfirst($item['reg_city']);
        $item['reg_street'] = ucfirst($item['reg_street']);

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


    }

    public function beforeItemShow(&$item)
    {
        if ($this->app->vars('_route.action') !== 'edit') {
            @$this->loc = $this->app->treeRead('locations')['tree']['data'];
            @$this->mon = $this->app->treeRead('money')['tree']['data'];

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

    public function commonFormat(&$item)
    {
        foreach ($item as $fld => $val) {
            if ((array)$val === $val) {
                $item[$fld] = $this->commonFormat($val);
            } else {
                if (validateDate($val, 'Y-m-d')) {
                    $item[$fld] = wbDate('d.m.Y', $item[$fld]);
                } elseif (strpos(' '.$fld, 'check') && $val == 'on') {
                    $item[$fld] = "X";
                } elseif (strpos(' '.$fld, 'money_cur')) {
                    $item[$fld] = $this->app->treeFindBranchById($this->mon, $item[$fld])['name'];
                }
            }
        }
        return $item;
    }

    public function getAddress($data, $prefix = null)
    {
        $prefix = $prefix == null ? '' : $prefix.'_';
        $region = $this->app->treeFindBranchById($this->loc, $data->get($prefix.'reg_region'));
        $distr = $this->app->treeFindBranchById($this->loc, $data->get($prefix.'reg_distr'));

        $region['id']  !== 'regions' ? $data->set($prefix.'regRegion', $region['name']) : $data->set($prefix.'regRegion', '');
        $distr['id'] !== 'regions' ? $data->set($prefix.'regDistr', $distr['name']) : $data->set($prefix.'regDistr', '');

        $data->get($prefix.'reg_corpse') > ' ' ? $data->set($prefix.'regCorpse', 'корп.'.$data->get($prefix.'reg_corpse')) : null;
        $data->get($prefix.'reg_build') > '' ? $data->set($prefix.'regCorpse', $data->get($prefix.'regCorpse').', стр. '.$data->get($prefix.'reg_build')) : null; // Корпус + строение
        $data->set($prefix.'regHouse', trim($data->get($prefix.'reg_house').' '.$data->get($prefix.'reg_house_num'))); // тип дома + номер дома
        $data->set($prefix.'regFlat', trim($data->get($prefix.'reg_flat').' '.$data->get($prefix.'reg_flat_num'))); // тип квартиры + номер квартиры
        $data->get($prefix.'reg_street') > ' ' ? $data->set($prefix.'regStreet', $data->get($prefix.'reg_street_type').$data->get($prefix.'reg_street')) : null;
        $data->get($prefix.'reg_city') > ' ' ? $data->set($prefix.'regCity', $data->get($prefix.'reg_city_type').$data->get($prefix.'reg_city')) : null;
        $address = [];
        $data->get($prefix.'regRegion') > '' ? $address[] = $data->get($prefix.'regRegion') : null;
        $data->get($prefix.'regDistr') > '' ? $address[] = $data->get($prefix.'regDistr') : null;
        $data->get($prefix.'regCity') > '' ? $address[] = $data->get($prefix.'regCity') : null;
        $data->get($prefix.'regStreet') > '' ? $address[] = $data->get($prefix.'regStreet') : null;
        $data->get($prefix.'regHouse') > '' ? $address[] = $data->get($prefix.'regHouse') : null;
        $data->get($prefix.'regCorpse') > '' ? $address[] = $data->get($prefix.'regCorpse') : null;
        $data->get($prefix.'regFlat') > '' ? $address[] = $data->get($prefix.'regFlat') : null;
        return implode(', ', $address);
    }

    public function getPassport($data, $prefix = null)
    {
        $prefix = $prefix == null ? '' : $prefix.'_';
        $passport = [];
        $data->get($prefix.'doc_type') > '' ? $passport[] = $data->get($prefix.'doc_type') : null;
        $data->get($prefix.'doc_ser') > '' ? $passport[] = 'серия '. $data->get($prefix.'doc_ser') : null;
        $data->get($prefix.'doc_num') > '' ? $passport[] = '№ '. $data->get($prefix.'doc_num') : null;
        $data->get($prefix.'doc_date') > '' ? $passport[] = 'выдан '. $data->get($prefix.'doc_date') : null;
        $data->get($prefix.'doc_who') > '' ? $passport[] = $data->get($prefix.'doc_who') : null;
        return implode(' ', $passport);
    }

    public function getDocument($item, $prefix = null)
    {
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


    public function getArrOutgoing($item, $prefix = null)
    {
        @$ctrs = $this->app->treeRead('countries')['tree']['data'];
        $data = ((array)$item === $item) ? $this->app->Dot($item) : $item;
        $prefix = $prefix == null ? '' : $prefix.'_';
        $list = (array)$data->get($prefix.'outgoing');
        foreach ($list as $key => &$vals) {
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
        @$data = $this->app->itemRead('docs', $scid);
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
                if ($fldset->find('input,textarea,select')->length == 1 or $fldset->find('label')->length == 1) {
                    $fldset->find('label')->inner($item['label']);
                    if ($fldset->find('label')->length !== 1) {
                        $fldset->find('[placeholder]')->attr('placeholder', $item['label']);
                    }
                } else {
                    $fldset->find('fieldset')->prepend('<div class="divider-text col-12">'.$item['label'].'</div>');
                }
            }
            if ($item['prefix'] > '') {
                $flds = $fldset->find('input,textarea,select');
                foreach ($flds as $fld) {
                    $name = $item['prefix']. '_' . $fld->attr('name');
                    $fld->attr('name', $name);
                }
            }
            if ($fldset) {
                $fldset->fetch($data);
                $result .= "\n\r".$fldset->html();
            }
        }
        echo $result;
    }
}
