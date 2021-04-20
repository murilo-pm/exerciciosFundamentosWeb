//Em JS, variáveis não receberão um tipo

//O DOM pode ser acessado por tag: getElementByTagName()
//O DOM pode ser acessado por id: getElementById()
//O DOM pode ser acessado por nome: getElementsByName()
//O DOM pode ser acessado por classe: getElementsClassName()
//O DOM pode ser acessado por seletor: querySelector() = melhor, pois seleciona SOMENTE tag/id ou classe

let nome = window.document.getElementById("nome");
let email = document.querySelector("#email");    //pode chamar window.document ou somente document.
let assunto = document.querySelector("#assunto");

nome.style.width = "100%"
email.style.width = "100%"

function validaNome(){
    
}





