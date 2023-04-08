const formulario = document.getElementById("form");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  valiarInputs();
});

function valiarInputs() {
  const nomeValue = nome.value;
  const emailValue = email.value;
  const telefoneValue = telefone.value;

  if (nomeValue === "") {
    validaCampoInvalido(nome);
  } else {
    validaCampoValido(nome);
  }
  if (emailValue === "") {
    validaCampoInvalido(email);
  } else {
    validaCampoValido(email);
  }

} 
function validaCampoInvalido(campo) {
  const msgCampoInvalido = document.querySelector(".msg-obrigatorio");
  msgCampoInvalido.classList.add("msg-obrigatorio-visible");
  campo.classList.add("invalido");
}

function validaCampoValido(campo) {
  nome.classList.add("valido");
}
