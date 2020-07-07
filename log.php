<?php
header('Content-type: text/html; charset=utf-8');
date_default_timezone_set('America/Santiago');
session_start();
include("conexion.php");


$periodoregistro = date("Y") . "-" . date("m");
$fecharegistro = date("Y/m/d", strtotime(date("Y") . "/" . date("m") . "/" . date("d")));
$fechalargaregistro = date("Y/m/d H:i:s", strtotime(date("Y") . "/" . date("m") . "/" . date("d") . " " . date("H") . ":" . date("i") . ":" . date("s")));
$horaregistro = date("H:i", strtotime(date("H") . ":" . date("i")));
$horalargaregistro = date("H:i:s", strtotime(date("H") . ":" . date("i") . ":" . date("s")));
$codigofechalargaregistro = date("Y") . date("m") . date("d") . date("H") . date("i") . date("s");

function getRealIP() {
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        return $_SERVER['HTTP_CLIENT_IP'];
    } else {
        if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
            return $_SERVER['HTTP_X_FORWARDED_FOR'];
        } else {
            return $_SERVER['REMOTE_ADDR'];
        }
    }
}

echo "El ID Sensor: " . $_POST['idsensor'] . "<br>";

echo "El ID Sensor: " .  $_POST['reportesensor'] . "<br>";


?>