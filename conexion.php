<?php
/* $host = '127.0.0.1';
$username = 'brainiacorfus@brainiacorfus';
$password = 'Orfus_laserena2018';
$db_name = 'brainiacorfus'; */
try {
    $conexion= new PDO('mysql:host=127.0.0.1;dbname=alarmasdb','useralarmas','passwordalarmas');
    $conexion -> exec("SET CHARACTER SET utf8");
} catch (PDOExeption $e) {
    echo "ERROR: " . $e->getMessage();
    die();
    }
/* $conexion = mysqli_init();
mysqli_real_connect($conexion, $host, $username, $password, $db_name, 3306);
if (mysqli_connect_errno($conexion)) {
    echo "ERROR: " .mysqli_connect_error();
    die('Failed to connect to MySQL: '.mysqli_connect_error());
} */
?>
