$(document).ready(function(){
    //document.getElementById("btn-procurar-pais").click();
    var paisRecebido = JSON.parse(localStorage.getItem("pais"));
    if (paisRecebido == undefined || paisRecebido == null) {
        window.location = "./paises.html";
    } else {
        getDetalhesPais(paisRecebido);
    }
})

var cloneOriginalCard = $('.card-countries').clone();

/*A função deve receber um objeto com as informações do país e adicionar as informações ao array de favoritos*/
function getDetalhesPais(pais) {
    $('#countries').html('');
    pais.forEach(element =>{
        var cloneCard = cloneOriginalCard.clone();
        $('.card-img-top',cloneCard).attr('src', element.bandeira);
        $('.card-title-pais',cloneCard).html("<b>Nome:</b> "+element.nome)
        if (element.capital === undefined){
            $('.card-capital-pais',cloneCard).html("<b>Capital:</b> Sem Capital");
        } else {
            $('.card-capital-pais',cloneCard).html("<b>Capital:</b> "+element.capital);
        }
        $('.card-pop-pais',cloneCard).html("<b>População:</b> "+element.populacao);

        var stringObjetoPais = JSON.stringify(element);
        $('.btn-favoritos', cloneCard).attr("onclick", "removeFavoritos("+stringObjetoPais+")");
        $('.btn-detalhes', cloneCard).attr("onclick", "abrirDetalhesPais("+stringObjetoPais+")");

        $('#countries').append(cloneCard);
    });
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
            arrayPaisesFavoritos.splice(index, 1);

            var favoritosStorage = JSON.stringify(arrayPaisesFavoritos);
            localStorage.setItem("pais", favoritosStorage);
        } 
    }
    window.location = "./favoritos.html";
}

function atualizarEstadoBotoes() {
    var arrayPaisesFavoritos = JSON.parse(localStorage.getItem("pais")) || []; // Carrega os favoritos ou cria um array vazio
    var botoes = document.querySelectorAll("#button-fav"); // Seleciona todos os botões com o id "button-fav"
    var Nome ;
    var objetoPais;
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
            
            //console.log(objetoPais); // Exibe o nome para verificação
                
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
            }
        }
    }
}


function abrirDetalhesPais(pais) {
    var arrayDetalhesPaises;   

    //var botao = event.target.closest('button');
    arrayDetalhesPaises = []
    arrayDetalhesPaises.push(pais);

    var detalhesStorage = JSON.stringify(arrayDetalhesPaises)
    localStorage.setItem("detalhesPaisSelecionado", detalhesStorage);

    window.location = "./detalhes.html";
}



function verificarTamanhoEcranRedimencionarBotões() {
    const botoes = document.getElementsByClassName('btn-detalhes');
    
    for (var i = 0; i < botoes.length; i++) {
        
        var button_detalhes =  botoes[i];
        if (window.innerWidth <= 600) {
            button_detalhes.innerHTML = "<big>⁉</big>";
        } else if (window.innerWidth <= 650){    
            button_detalhes.innerHTML = "Detalhes ⁉";
        } else {
            button_detalhes.innerHTML = "<big>Detalhes ⁉</big>";
        }
    }
}

// Corre a função ao carregar a página e ao redimensionar a janela
window.addEventListener('resize', verificarTamanhoEcranRedimencionarBotões);