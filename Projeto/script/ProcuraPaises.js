var cloneOriginalCard = $('.card-countries').clone();

$('#btn-search').on('click', function(){
    var valorPesquisa = $('#pais_nome').val();
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


        //for(var i=0; i< dados.Search.length;i++) {}
    });
});  