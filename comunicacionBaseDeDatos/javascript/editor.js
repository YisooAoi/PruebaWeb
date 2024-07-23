function editar(object) {
    codigoHTML = `
    <tr id="${object.nombre}">
      <td class="itemLista"> ${object.nombre} </td>
      <td class="itemLista"> ${object.link} </td>
      <td class="itemLista"> ${object.fechaDeModificacion} </td>
      <td class="itemLista"> ${object.imagen} </td>
      <!-- Acciones -->
      <td class="itemLista botones">
        <div class="botonTabla" id="editar" onclick=
        'editar.js('` + `$` + `{fila.nombre}` + `')' > 
          <button class="botonSVG" alt="Editar"> 
        </div>
      </td>
    </tr>`;
    document.getElementById(object);
    document.getElementById(object).innerHTML = codigoHTML;
}