const parametros = new URLSearchParams(document.location.search);
const identificador = parametros.get("identificador");
const formulario = document.getElementById('formularioEditor')
if (identificador!=null) {
  formulario.action=`comunicacionBaseDeDatos/php/modificarLink.php?identificador=${identificador}`;
}
