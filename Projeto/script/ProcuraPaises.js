$(document).ready(function(){
    document.getElementById("btn-procurar-pais").click();
})

var cloneOriginalCard = $('.card-countries').clone();

var input = document.getElementById("pais-nome");

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("btn-procurar-pais").click();
    }
});

$('#btn-procurar-pais').on('click', function(){
    var valorPesquisa = $('#pais-nome').val();
    var valorPesquisaSufix= "translation/"
    if (valorPesquisa == "") {
        valorPesquisaSufix = "all/";
    }
    $('#countries').html('');
    $.ajax({
        method:'GET',
        url:'https://restcountries.com/v3.1/' + valorPesquisaSufix + valorPesquisa
    }).done(function(dados){
        dados.forEach(element =>{
            var cloneCard = cloneOriginalCard.clone();
            $('.card-img-top',cloneCard).attr('src', element.flags.png);
            $('.card-title-pais',cloneCard).html("<b>Nome:</b> "+element.name.common)
            if (element.capital === undefined){
                $('.card-capital-pais',cloneCard).html("<b>Capital:</b> Sem Capital");
            } else {
                $('.card-capital-pais',cloneCard).html("<b>Capital:</b> "+element.capital);
            }
            $('.card-pop-pais',cloneCard).html("<b>População:</b> "+element.population);
            var objetoPais = {
                "nome":element.name.common,
                "capital":element.capital === undefined ? "Sem Capital" : element.capital[0],
                "populacao":element.population,
                "bandeira":element.flags.png
            }
            var stringObjetoPais = JSON.stringify(objetoPais);
            $('.btn-favoritos', cloneCard).attr("onclick", "addFavoritos("+stringObjetoPais+")");
            $('.btn-detalhes', cloneCard).attr("onclick", "abrirDetalhesPais("+stringObjetoPais+")");
            $('#countries').append(cloneCard);
        });
        atualizarEstadoBotoes();    
    });
    
});  

function addFavoritos(pais) {
    var arrayPaisesFavoritos;   
    var botao = event.target.closest('button');
    if (localStorage.getItem("pais") === null) {
        arrayPaisesFavoritos = []
        arrayPaisesFavoritos.push(pais);

        var favoritosStorage = JSON.stringify(arrayPaisesFavoritos)
        localStorage.setItem("pais", favoritosStorage);
    } else {
        arrayPaisesFavoritos = JSON.parse(localStorage.getItem("pais"));
        for (var i = 0; i <= arrayPaisesFavoritos.length ;i++) {
            if (arrayPaisesFavoritos.findIndex( s => s.nome == pais.nome) == -1) {
                arrayPaisesFavoritos.push(pais);

                var favoritosStorage = JSON.stringify(arrayPaisesFavoritos);
                localStorage.setItem("pais", favoritosStorage);
            } 
        }
    }
    botao.setAttribute("onclick", "removeFavoritos("+JSON.stringify(pais)+")");
    botao.setAttribute("class", "btn-favoritos text-start btn btn-outline-danger mt-3 mb-1");
    //botao.querySelector("big").innerText = "❤ RemFav";
}
//L[] = 150 / 3 - ROUND(terc) -> RND1 = RND(0,terc) RND2 = RND(trc+1,terc*2) RND3 = RND(terc*2+1, terc*3) para fazer as 3 principais
function removeFavoritos(pais) {
    var arrayPaisesFavoritos;    
    var botao = event.target.closest('button');
    if (localStorage.getItem("pais") === null) {
        arrayPaisesFavoritos = []
        arrayPaisesFavoritos.push(pais);

        var favoritosStorage = JSON.stringify(arrayPaisesFavoritos);
        localStorage.setItem("pais", favoritosStorage);
    } else {
        arrayPaisesFavoritos = JSON.parse(localStorage.getItem("pais"));

        var index  = arrayPaisesFavoritos.findIndex(s => s.nome == pais.nome); //o findindex troca o for, ao utilizar o findindex ele devoolve automaticamente o idex do pais se for encontrado senão ele devolve -1
        if ( index != -1) {
            console.log(index); //TEMP
            arrayPaisesFavoritos.splice(index, 1);

            var favoritosStorage = JSON.stringify(arrayPaisesFavoritos);
            localStorage.setItem("pais", favoritosStorage);
        } 
    }
    botao.setAttribute("onclick", "addFavoritos("+JSON.stringify(pais)+")");
    botao.setAttribute("class", "btn-favoritos text-start btn btn-danger mt-3 mb-1");
    //botao.querySelector("big").innerText = "❤ AddFav";
}


//estou aqui
function atualizarEstadoBotoes() {
    var arrayPaisesFavoritos = JSON.parse(localStorage.getItem("pais")) || []; // Carrega os favoritos ou cria um array vazio
    var botoes = document.querySelectorAll("#button-fav"); // Seleciona todos os botões com o id "button-fav"
    var Nome, Populacao, Capital, Bandeira;
    var objetoPais;
    console.log(botoes.length);
    for (var i = 0; i < botoes.length; i++) { // Itera sobre todos os botões encontrados
        var botao_coracao = botoes[i];
        var card = botao_coracao.parentNode.querySelector("#card"); // Procura o elemento pai mais próximo com a classe "card"
        if (card) { // Verifica se o card existe
            Nome = card.querySelector("#nome-card-pais").innerText.replace("Nome: ", ""); // Obtém o nome do país
            Populacao = card.querySelector("#populacao-card-pais").innerText.replace("População: ", ""); // Obtém a população do país
            Capital = card.querySelector("#capital-card-pais").innerText.replace("Capital: ", ""); // Obtém a capital do país
            Bandeira = card.querySelector("img").src; // Obtém o src da imagem (bandeira)
            
            var objetoPais = {
                "nome":card.querySelector("#nome-card-pais").innerText.replace("Nome: ", ""),
                "capital":card.querySelector("#capital-card-pais").innerText.replace("Capital: ", ""),
                "populacao":card.querySelector("#populacao-card-pais").innerText.replace("População: ", ""),
                "bandeira": card.querySelector("img").src
            }
            
            console.log(objetoPais); // Exibe o nome para verificação
            
            if (Nome) {
                // Verifica se o país já está nos favoritos
                var existeNosFavoritos = arrayPaisesFavoritos.findIndex(s => s.nome === Nome);
                if (existeNosFavoritos !== -1) {
                    // Se já existe nos favoritos, altera o botão para 'remover' favorito
                    botao_coracao.setAttribute("onclick", "removeFavoritos(" + JSON.stringify(objetoPais) + ")");
                    botao_coracao.setAttribute("class", "btn-favoritos text-start btn btn-outline-danger mt-3 mb-1");
                } else {
                    // Se não existe, altera o botão para 'adicionar' aos favoritos
                    botao_coracao.setAttribute("onclick", "addFavoritos(" + JSON.stringify(objetoPais) + ")");
                    botao_coracao.setAttribute("class", "btn-favoritos text-start btn btn-danger mt-3 mb-1");
                }
                console.log("Ta tudo atualizadissimissimo"); // TEMP
            }
        }
    }
}


function abrirDetalhesPais(pais) {
    var arrayDetalhesPaises;   
    //var botao = event.target.closest('button');
    if (localStorage.getItem("detalhesPaisSelecionado") === null) {
        arrayDetalhesPaises = []
        arrayDetalhesPaises.push(pais);

        var detalhesStorage = JSON.stringify(arrayDetalhesPaises)
        localStorage.setItem("detalhesPaisSelecionado", detalhesStorage);
    } else {    
        arrayDetalhesPaises = JSON.parse(localStorage.getItem("detalhesPaisSelecionado"));
        for (var i = 0; i <= arrayDetalhesPaises.length ;i++) {
            if (arrayDetalhesPaises.findIndex( s => s.nome == pais.nome) == -1) {
                arrayDetalhesPaises.push(pais);

                var detalhesStorage = JSON.stringify(arrayDetalhesPaises);
                localStorage.setItem("detalhesPaisSelecionado", detalhesStorage);
            } 
        }
    }



    window.location = "../detalhes.html";
    //botao.querySelector("big").innerText = "❤ RemFav";
}

