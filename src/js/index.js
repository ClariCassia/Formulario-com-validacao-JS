const formulario = document.getElementById("form");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const mensagem = document.getElementById("mensagem");


formulario.addEventListener("submit",function(event) {
    event.preventDefault();
    if (nome.value === "") {
        nome.classList.add('invalido')
        console.log('batata')
    }
    
})

