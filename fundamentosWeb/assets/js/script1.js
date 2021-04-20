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
    let txtNome = document.querySelector("#txtNome")
    if(nome.value.length<3){
        txtNome.innerHTML = "Nome inválido"
        txtNome.style.color = "red"
    }else{
        txtNome.innerHTML = "Nome válido"
        txtNome.style.color = "blue"
    }
}
function validaEmail(){
        let txtEmail = document.querySelector("#txtEmail")
        if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || email.value.indexOf("com") == -1){
            txtEmail.innerHTML = "E-mail inválido";
            txtEmail.style.color = "red"
        }else{
            txtEmail.innerHTML = "E-mail válido"
            txtEmail.style.color = "blue"
        }
        
    }





