//Em JS, variáveis não receberão um tipo

//O DOM pode ser acessado por tag: getElementByTagName()
//O DOM pode ser acessado por id: getElementById()
//O DOM pode ser acessado por nome: getElementsByName()
//O DOM pode ser acessado por classe: getElementsClassName()
//O DOM pode ser acessado por seletor: querySelector() = melhor, pois seleciona SOMENTE tag/id ou classe

let nome = window.document.getElementById("nome");
let email = document.querySelector("#email");    //pode chamar window.document ou somente document.
let assunto = document.querySelector("#assunto");
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;
let mapa = document.querySelector("#mapa");

nome.style.width = "100%"
email.style.width = "100%"

//As validações são problemáticas/burocráticas no Microsoft Edge, recomenda-se a utilização do Google Chrome

function validaNome(){
    let txtNome = document.querySelector("#txtNome")
    if(nome.value.length<3){
        txtNome.innerHTML = "Nome inválido"
        txtNome.style.color = "red"
    }else{
        txtNome.innerHTML = "Nome válido"
        txtNome.style.color = "blue"
        nomeOk = true
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
            emailOk = true
        }
        
    }

function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")
    if(assunto.value.length>=150){
        txtAssunto.innerHTML = "Limite de 150 caracteres"
        txtAssunto.style.color = "red"
    }else{
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

function enviar(){
    if(nomeOk ==  true && assuntoOk == true && emailOk == true){
        alert("formulário enviado corretamente")
    }else{
        alert("preencha o formulário corretamente")
    }
}

function zoomInMapa(){
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}

function zoomNormalMapa(){
    mapa.style.width = "400px"
    mapa.style.height = "250px"
}