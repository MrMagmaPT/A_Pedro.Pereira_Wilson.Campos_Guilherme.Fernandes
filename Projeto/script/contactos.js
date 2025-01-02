
document.getElementById('contact-form').addEventListener('submit', function(event){
    event.preventDefault();
    validateForm();

});

function validateForm() {
    var mensagemErro= false;

    var nome=document.getElementById('nome');
    console.log("nome");

    if (nome.value.length <2) {
        mensagemErro= "Por favor , insira seu nome (minimio 2 caracteres!)"
        showError('nome', mensagemErro)
    }

    var mensagem= document.getElementById('mensagem');

    if (mensagem.value.length <5) {
        mensagemErro= "Por favor, insira uma mensagem";
    }

    var email= document.getElementById('email');
    if (!validateEmail (email.value)) {
        mensagemErro= "Por favor, insira um email válido";
    }
}

function validateEmail(email){
    var regex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    regex.test(email);
    return regex.test(email);

}

function showError(campoID, mensagem) {
    var elemento= document.getElementById(campoID);
    if(elemento !=null) {
        if(elemento.type == "radio"){
            var lastRadio= document.getElementsByName(elemnto.name). item(2);
            lastRadio.classList.add("is-invalid");
        } 
        var feedbackDiv= document.querySelector(`#` + campoID + " ~ .invalid-feedback")
        if (elemento !=null) {
            feedbackDiv.textContent=mensagem;
            feedbackDiv.computedStyleMap.display= "block";
        }
    }   
}
