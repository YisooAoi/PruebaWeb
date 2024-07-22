<?php
  $conexion = new mysqli('localhost', 'root', '','links');
  if ($conexion->connect_errno) {
    echo "Hubo un error al conectarse con la página";
  }
 ?>
