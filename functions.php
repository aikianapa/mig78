<?php

@include_once( __DIR__ . '/engine/modules/yonger/common/scripts/functions.php');

        // Основной бот 5759707566:AAH_TJlE--AWmSw-ny9AOmUp3_LZslcgmDc
        // тестовый 1135435365:AAFHaQHZOXSaY-trfQ1NFWEw8MjgRJwWSs0

$_ENV['chat_id'] = "120805934";
$_ENV['bot_id'] = '5759707566:AAH_TJlE--AWmSw-ny9AOmUp3_LZslcgmDc';

function dateform($date)
{
    return date('d.m.Y', strtotime($date));
}

function text2tel($str) {
    $tel =  preg_replace("/\D/", '', $str);
    if (strlen($tel) == 11 && substr($tel,0,1) == "8") {
        $tel = "7".substr($tel,1);
    }
    return $tel;
}

function fmtPrice($sum) {
    return number_format($sum, 0, '.', ' ');
}
function validateDate($date, $format = 'Y-m-d H:i:s')
{
    $d = DateTime::createFromFormat($format, $date);
    return $d && $d->format($format) == $date;
}


function getPeriod($date1, $date2)
{
    $date1 = new DateTime($date1);
    $date2 = new DateTime($date2);
    $interval = date_diff($date1, $date2);
    $y='';
    $m='';
    $d='';

    if ($interval->y>0) {
        if ($interval->y>4) {
            $y .=$interval->y . ' лет';
        } elseif ($interval->y == 1) {
            $y .=$interval->y . ' год';
        } else {
            $y .=$interval->y . ' года';
        }
        $y .= ', ';
    }

    if ($interval->m>0) {
        if ($interval->m>4) {
            $m .= $interval->m . ' месяцев';
        } elseif ($interval->m>1) {
            $m .= $interval->m . ' месяца';
        } else {
            $m .= $interval->m . ' месяц';
        }
        $m .= ', ';
    }

    if ($interval->d>0) {
        if ($interval->d>4) {
            $d .= $interval->d . ' дней';
        } elseif ($interval->d>1) {
            $d .= $interval->d . ' дня';
        } else {
            $d .= $interval->d . ' день';
        }
    }

    return $y . $m . $d;
}


?>