<!DOCTYPE html>
<html lang="es" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Guardando link...</title>
  </head>
  <body>
    <?php
    $conexion = new mysqli('localhost', 'root', '','archivo_links');
    if ($conexion->connect_errno) {
      echo "Hubo un error al conectarse con la página";
    }

    $declaracion = $conexion->prepare("INSERT INTO tablas (nombre, link, fecha_de_modificacion, imagen) VALUES (?, ?, ?, ?);");

    $nombre = $_POST['nombre'];
    $link = $_POST['link'];
    $imagen = $_POST['imagen'];
    $fechaDeModificacion = date("Y-m-d");

    $declaracion->bind_param("ssss", $nombre, $link, $fechaDeModificacion, $imagen);
    $declaracion->execute();
    ?>
    <script type="text/javascript">
      window.onload = window.location.href = "../../index.html";
    </script>
  </body>
</html>
