<?php
$conexion = new mysqli('localhost', 'root', '','archivo_links');
if ($conexion->connect_errno) {
  echo "Hubo un error al conectarse con la página";
}
$consulta = "SELECT * FROM tablas;";
$resultado = mysqli_query($conexion, $consulta);


if ($resultado) {
  while ($fila = mysqli_fetch_assoc($resultado)) {
    $tablas[] = array(
      'identificador' => $fila['identificador'],
      'nombre' => $fila['nombre'],
      'link' => $fila['link'],
      'fechaDeModificacion' => $fila['fecha_de_modificacion'],
      'imagen' => $fila['imagen'],
    );
  }
  echo json_encode($tablas);
}

?>
