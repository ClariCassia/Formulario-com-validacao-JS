const formulario = document.getElementById("form");
const inputs = document.querySelectorAll("input, textarea");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  validaCampoVazio(inputs);
});

function validaCampoVazio(inputs) {
  inputs.forEach((item) => {
    const controleFormulario = item.parentElement;
    const mensagemERRO = controleFormulario.querySelector(".msg-campos-obrigatorio");
    if (item.value === "") {
      mensagemERRO.classList.add("msg-obrigatorio-visible");
      item.classList.add("invalido");
      item.classList.remove("valido");
    } else {
      mensagemERRO.classList.remove("msg-obrigatorio-visible");
      item.classList.add("valido");
      item.classList.remove("invalido");
    }
  });
}

function somenteNumeros(e) {
  var code = e.which || e.keyCode;

  if (code < 48 || code > 57) {
    e.preventDefault();
    return false;
  }
}