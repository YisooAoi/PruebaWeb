<!DOCTYPE html>
<html lang="es" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Editando link...</title>
  </head>
  <body>
    <?php
    $conexion = new mysqli('localhost', 'root', '','archivo_links');
    if ($conexion->connect_errno) {
      echo "Hubo un error al conectarse con la página";
    }

    $identificador = $_REQUEST['identificador'];
    $nombre = $_POST['nombre'];
    $link = $_POST['link'];
    $imagen = $_POST['imagen'];
    $fechaDeModificacion = date("Y-m-d");

    $declaracion = $conexion->prepare("UPDATE tablas SET nombre=?, link=?, fecha_de_modificacion=?, imagen=? WHERE identificador=?;");
    $declaracion->bind_param("ssssi", $nombre, $link, $fechaDeModificacion, $imagen, $identificador);
    $declaracion->execute();
    ?>
    <script type="text/javascript">
      window.onload = window.location.href = "../../index.html";
    </script>
  </body>
</html>
