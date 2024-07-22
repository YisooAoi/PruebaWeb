<?php
$conexion = new mysqli('localhost', 'root', '','archivo_links');
if ($conexion->connect_errno) {
  echo "Hubo un error al conectarse con la página";
}

$identificador = $_REQUEST['identificador'];
$declaracion = $conexion->prepare("DELETE FROM tablas WHERE identificador=?;");

$declaracion->bind_param("i", $identificador);
$declaracion->execute();
?>
