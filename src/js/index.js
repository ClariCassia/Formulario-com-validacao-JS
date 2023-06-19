const formulario = document.getElementById("form");
const inputs = document.querySelectorAll("input, textarea");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  validaCampoVazio(inputs);
});

function validaCampoVazio(inputs) {
  inputs.forEach((input) => {
    const campoFormulario = input.parentElement;
    const mensagemERRO = campoFormulario.querySelector(".msg-campos-obrigatorio");
    if (input.value === "") {
      mensagemERRO.classList.add("msg-obrigatorio-visible");
      input.classList.add("invalido");
      input.classList.remove("valido");
    } else {
      mensagemERRO.classList.remove("msg-obrigatorio-visible");
      input.classList.add("valido");
      input.classList.remove("invalido");
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