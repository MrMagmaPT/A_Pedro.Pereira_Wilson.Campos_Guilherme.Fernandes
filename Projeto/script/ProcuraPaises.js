var cloneOriginalCard = $('.card-countries').clone();



//teste teste n remover ainda !!!!!!

// Get the input field
var input = document.getElementById("pais-nome");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("btn-procurar-pais").click();
  }
});

//teste teste n remover ainda !!!!!!



$('#btn-procurar-pais').on('click', function(){
    var valorPesquisa = $('#pais-nome').val();
    var valorPesquisaSufix= "name/"
    if (valorPesquisa == "") {
        valorPesquisaSufix = "all/";
    }

    $('#countries').html('');

    $.ajax({
        method:'GET',
        url:'https://restcountries.com/v3.1/' + valorPesquisaSufix + valorPesquisa
    }).done(function(dados){
        console.log(dados);

        dados.forEach(element =>{
            console.log(element.name.common);
            var cloneCard = cloneOriginalCard.clone();
            
            $('.card-img-top',cloneCard).attr('src', element.flags.png);
            $('.card-title',cloneCard).text(element.name.common);
            $('#countries').append(cloneCard)
        });
    });
});  