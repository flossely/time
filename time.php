<?php

if (file_exists('timezone')) {
    $timezoneFile = file_get_contents('timezone');
    $timezone = ($timezoneFile != '') ? $timezoneFile : 'UTC';
} else {
    $timezone = 'UTC';
}

if (file_exists('format')) {
    $timeformatFile = file_get_contents('format');
    $timeformat = ($timeformatFile != '') ? $timeformatFile : 'j/n/Y G:i';
} else {
    $timeformat = 'j/n/Y G:i';
}

date_default_timezone_set($timezone);
echo $time = date($timeformat);