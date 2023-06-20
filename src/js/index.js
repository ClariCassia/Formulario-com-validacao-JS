const formulario = document.getElementById("form");
const inputs = document.querySelectorAll("input, textarea");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  validaCamposVazios(inputs);
});

function validaCamposVazios(inputs) {
  inputs.forEach((input) => {
    const campoFormulario = input.parentElement;
    const mensagemErro = campoFormulario.querySelector(".msg-campos-obrigatorio");
    if (input.value === "") {
      mensagemErro.classList.add("msg-obrigatorio-visible");
      input.classList.add("invalido");
      input.classList.remove("valido");
    } else {
      mensagemErro.classList.remove("msg-obrigatorio-visible");
      input.classList.add("valido");
      input.classList.remove("invalido");
    }
  });
}

function somenteNumeros(e) {
  const code = e.which || e.keyCode;
  if (code < 48 || code > 57) {
    e.preventDefault();
    return false;
  }
}