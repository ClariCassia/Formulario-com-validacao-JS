const formulario = document.getElementById("form");
const inputs = document.querySelectorAll("input, textarea");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  validaCampoVazio(inputs);
});

function validaCampoVazio(inputs) {
  inputs.forEach((item) => {
    if (item.value === "") {
      const controleFormulario = item.parentElement;
      const mensagemERRO = controleFormulario.querySelector(".msg-obrigatorio");
      mensagemERRO.classList.add("msg-obrigatorio-visible");
      item.classList.add("invalido");
    } else {
      item.classList.add("valido");
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
