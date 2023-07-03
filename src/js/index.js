const formulario = document.getElementById("form");
const inputs = document.querySelectorAll("input, textarea");
const mensagensErro = document.querySelectorAll(".msg-campos-obrigatorio");


formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  validaCampos()
})

const validaCampos = () => {
  inputs.forEach((input, index) => {
    input.value === "" ?
      (input.classList.add("invalido"), mensagensErro[index].classList.add("msg-obrigatorio-visible")) :
      (input.classList.remove("invalido"), input.classList.add("valido"), mensagensErro[index].classList.remove("msg-obrigatorio-visible"));
  })
}

function validarTelefone(input) {
  input.value = input.value.replace(/[^0-9]/g, ''); 
  input.value = input.value.replace(/,/g, ''); 
}