const formulario = document.getElementById("form");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const mensagem = document.getElementById("mensagem");
const mensagemUsuario = document.getElementById("mensagem");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  valiarInputs();
});

function valiarInputs() {
  const nomeValue = nome.value;
  const emailValue = email.value;
  const telefoneValue = telefone.value;
  const mensagemUsuarioValue = mensagemUsuario.value;

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
  if (telefoneValue === "") {
    validaCampoInvalido(telefone);
  } else {
    validaCampoValido(telefone);
  }
  if (mensagemUsuarioValue === "") {
    validaCampoInvalido(mensagemUsuario);
  } else {
    validaCampoValido(mensagemUsuario);
  }
  validaFormulario(formulario)
}

function validaCampoInvalido(campo) {
  const controleFormulario = campo.parentElement;
  const mensagemERRO = controleFormulario.querySelector(".msg-obrigatorio");
  mensagemERRO.classList.add("msg-obrigatorio-visible");
  campo.classList.add("invalido");
}

function validaCampoValido(campo) {
  campo.classList.add("valido");
}

// function validaFormulario(formulario) {
//   const inputsValidos = formulario.querySelectorAll(".valido");
//   const formularioValido = [...inputsValidos].every((inputsValidos) => {
//     return (inputsValidos.className = "controle-formulario valido ");
//   });

//   if (formularioValido) {
//     alert("Formulario enviado com sucesso");
//   }
// }
