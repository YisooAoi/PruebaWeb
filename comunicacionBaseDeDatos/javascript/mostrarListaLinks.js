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
        <tr>
        <td class="itemLista"> ${fila.nombre} </td>
        <td class="itemLista"> ${fila.link} </td>
        <td class="itemLista"> ${fila.fechaDeModificacion} </td>
        <td class="itemLista"> ${fila.imagen} </td>
        <td class="itemLista botones">
        <div class="botonTabla" id="mostrar" onclick='window.location.href = "${fila.link}";'> <img class="botonSVG" src="graphics/mostrarLink.svg" alt="Mostrar Link"> </div>
        <div class="botonTabla" id="editar" onclick='window.location.href="editor.html?identificador=${fila.identificador}";'> <img class="botonSVG" src="graphics/pincelEditar.svg" alt="Editar"> </div>
        <div class="botonTabla" id="eliminar" onclick="eliminarLink()"> <img class="botonSVG" id="${fila.identificador}" src="graphics/basuraCerrada.svg" alt="Eliminar"> <!--<img class="botonSVG" src="graphics/basuraAbierta.svg" alt="Eliminar">--> </div>
        </td>
        </tr>`;
        mostradorLinks.innerHTML = codigoHTML;
      });
      console.log(codigoHTML);
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
