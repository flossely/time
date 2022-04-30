<?php

if (file_exists('timezone')) {
    $timezoneFile = file_get_contents('timezone');
    $timezone = ($timezoneFile != '') ? $timezoneFile : 'UTC';
} else {
    $timezone = 'UTC';
}

if (file_exists('format')) {
    $timeformatFile = file_get_contents('format');
    $timeformat = ($timeformatFile != '') ? $timeformatFile : 'd/m/Y H:i:s';
} else {
    $timeformat = 'd/m/Y H:i:s';
}

date_default_timezone_set($timezone);
echo $ct = date($timeformat);