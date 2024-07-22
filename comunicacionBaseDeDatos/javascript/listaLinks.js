const solicitudXmlHttp = new XMLHttpRequest();
solicitudXmlHttp.open(
  'GET',
  '/ruta/'
);
solicitudXmlHttp.send();
solicitudXmlHttp.onload = function () {
  let respuesta = this.responseText;
  codigoHTML = '';
  links.forEach((link) => {
    codigoHTML += `
    <tr>
    <td> ${datos.nombre} </td>
    <td> ${datos.link} </td>
    <td> ${datos.fechaDeModificacion} </td>
    <td> ${datos.imagen} </td>
    </tr>`
  });
  tabla.innerHTML = codigoHTML;
}
