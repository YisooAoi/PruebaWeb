function eliminarLink() {
  let seleccion = event.target.id;
  const solicitudXmlHttp = new XMLHttpRequest();
  solicitudXmlHttp.open(
    'GET',
    `comunicacionBaseDeDatos/php/eliminarLink.php?identificador=${seleccion}`
  )
  solicitudXmlHttp.send();

  actualizarVista();
}
