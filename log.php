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

/* echo "El ID Sensor: " . $_GET['idsensor'] . "<br>";

echo "El Reporte Sensor: " .  $_GET['reportesensor'] . "<br>";

echo "La IP: " .  getRealIP() . "<br>";

echo "La Fecha: " .  $fechalargaregistro . "<br>"; */


/* $varselect = $conexion -> prepare('INSERT INTO reportessensores (idsensor,fechalargaregistro,reportesensor,ipsensor) VALUES (:id,:fechalargaregistro0,:reportesensor,:ipsensor)');
$varselect -> execute(
		array(
			':id' => $_GET['idsensor'],
			':fechalargaregistro0' => $fechalargaregistro,
			':reportesensor' => $_GET['reportesensor'],
			':ipsensor' => getRealIP()
		)
	); */

/* el siguiente codigo verifica que por post se este enviando el parametro varproceso */
if (isset($_POST['varproceso'])) {
    $varproceso = ($_POST['varproceso']);
    
    switch($varproceso):
    /* el siguiente proceso cierra la sesion */    

    /*este proceso recupera la data de la tabla de monitoreo*/
    case "002":
        
        $varcadenaretorno = "";
        $varrs = $conexion -> prepare('SELECT a.*,b.nombretiposensor FROM sensores a LEFT JOIN tiposensores b ON a.idtiposensor = b.idtiposensor ORDER BY nombresensor');
        $varrs->execute();
        $totalregistros = $varrs->rowcount();
        if($totalregistros > 0)
            {
                printf("002;ConDatos;");
                $varresultados = $varrs -> fetchall();
                foreach($varresultados as $vardatoscolumnas) {

                    echo $vardatoscolumnas['idsensor'];
                    echo "&#59";
                    echo $vardatoscolumnas['nombresensor'];
                    echo "&#59";
                    echo $vardatoscolumnas['nombretiposensor'];
                    echo "&#59";
                    echo $vardatoscolumnas['alarmasensor'];
                    echo "&#59";
                    echo $vardatoscolumnas['alarmasensor'];  
                    echo "&#59";
                    echo $vardatoscolumnas['alarmasensor'];                      
                    echo "&#124";
                }
            }
        else
            {
                echo"002;SinDatos";
            }
        $varrs = null;

    break;
    endswitch;
}

?>