function actualizarVista() {
  const solicitudXmlHttp = new XMLHttpRequest();
  var mostradorLinks = document.getElementById("mostradorLinks");
  solicitudXmlHttp.open(
    'GET',
    'comunicacionBaseDeDatos/php/listaLinks.php'
  );
  solicitudXmlHttp.send();
  solicitudXmlHttp.onload = function () {
    let respuesta = this.responseText;
    let codigoHTML = '';
    try {
      mostradorLinks.innerHTML = codigoHTML;
      let tablaLinks = JSON.parse(respuesta);

      tablaLinks.forEach((fila) => {
        codigoHTML += `
        <tr id="${fila.nombre}">
          <td class="itemLista"> ${fila.nombre} </td>
          <td class="itemLista"> ${fila.link} </td>
          <td class="itemLista"> ${fila.fechaDeModificacion} </td>
          <td class="itemLista"> ${fila.imagen} </td>
          <td class="itemLista botones">
          <!--Really wack code-->
            <div class="botonTabla" id="mostrar" onclick='window.location.href = "${fila.link}";'> 
              <button class="botonSVG" alt="Mostrar Link"> 
            </div>
            <div class="botonTabla" id="editar" onclick='editar(` + `"` + `${fila.nombre}` + `"` + `)'> 
              <button class="botonSVG" alt="Editar"> 
            </div>
            <div class="botonTabla" id="eliminar" onclick="eliminarLink()"> 
              <button class="botonSVG" id="${fila.identificador}" alt="Eliminar"> 
            </div>
          </td>
        </tr>`;
        mostradorLinks.innerHTML = codigoHTML;
      });
  
    } catch (e) {
      codigoHTML = `
      <tr>
      <td colspan='5' class="itemLista"> No hay datos disponibles </td>
      </tr>`;
      mostradorLinks.innerHTML = codigoHTML;
      }
    }
  }

window.onload = actualizarVista();
