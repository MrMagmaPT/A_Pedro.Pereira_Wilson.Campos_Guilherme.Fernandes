document.getElementById('contact-form').addEventListener('submit', function(event){
    event.preventDefault();
    enviarFormulario();

});

function enviarFormulario(){
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;

    if(nome == "" || email == "" || mensagem == ""){
        alert('Preencha todos os campos');
    }else{
        alert('Formulário enviado com sucesso');
    }
    window.location = "contactos.html";
}