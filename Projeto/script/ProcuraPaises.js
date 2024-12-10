    var cloneOriginalCard = $('.card-countries').clone();


$('#btn-search').on('click', function(){
    var valorPesquisa = $('#pais_nome').val();

    $('#countries').html('');



    $.ajax({
        method:'GET',
        url:'https://www.omdbapi.com/?i=tt3896198&apikey=f8242fe8&s=' + valorPesquisa
    }).done(function(dados){
        console.log(dados);

        console.log(dados.totalResults);

        for(var i=0; i< dados.Search.length;i++) {
            console.log(dados.Search[i].Title);
            var clonecard = cloneOriginalCard.clone();
            
            $('.card-img-top',clonecard).attr('src', dados.Search[i].Poster);
            $('.card-title',clonecard).text(dados.Search[i].Title);
            $('#countries').append(clonecard)
        }


    });
});  