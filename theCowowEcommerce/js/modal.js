const contenedorModal = document.getElementsByClassName("modal-bg")[0];
const botonAbrir = $("#cart");
const botonCerrar = $("#cerrarCarro");
const bgModal = $('bgRed')


botonAbrir.click(() => {
  contenedorModal.classList.add("changeModal");
  document.getElementById('bgRed').classList.add('bgRed')
});



botonCerrar.click(() => {
  contenedorModal.classList.remove("changeModal");
  document.getElementById('bgRed').classList.remove('bgRed')
});


bgModal.click(() => {
  contenedorModal.classList.remove("changeModal");
  document.getElementById('bgRed').classList.remove('bgRed')
});