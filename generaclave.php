<?php
$clave=$_GET['clave'];
/* $clave=trim($clave);
$clave=htmlspecialchars($clave);
$clave=stripslashes($clave); */
$clave=filter_var($clave,FILTER_SANITIZE_STRING);
$clave=trim($clave);
$clave=htmlspecialchars($clave);
$clave=stripslashes($clave);
$clave=hash("sha512",$clave);
echo $clave;
?>