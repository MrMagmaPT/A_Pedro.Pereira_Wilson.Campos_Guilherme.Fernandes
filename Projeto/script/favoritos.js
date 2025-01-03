
$(document).ready(function(){ // Quando a pagina for aberta ele vai verificar se tem algum pais no localstorage, se tiver ele vai chamar a função getDetalhesPais.
    //document.getElementById("btn-procurar-pais").click();
    var paisRecebido = JSON.parse(localStorage.getItem("pais"));//Pega o pais que foi favoritada na pagina de paises.html.

    if (paisRecebido == undefined || paisRecebido == null) {// Se não tiver pais favoritados ele vai redirecionar para a pagina de paises.html.
        window.location = "./paises.html";
    } else {// Se tiver pais favoritados ele vai chamar a função getDetalhesPais.
        getDetalhesPais(paisRecebido);
    }
})

var cloneOriginalCard = $('.card-countries').clone();// Clona o card original para ser usado na função getDetalhesPais.

/*A função deve receber um objeto com as informações do país e adicionar as informações ao array de favoritos*/
function getDetalhesPais(pais) {
    $('#countries').html('');//(??)
    pais.forEach(element =>{
        var cloneCard = cloneOriginalCard.clone();// Clona o card original para ser usado na função getDetalhesPais.

        $('.card-img-top',cloneCard).attr('src', element.bandeira);// Adiciona a bandeira do pais no card.

        $('.card-title-pais',cloneCard).html("<b>Nome:</b> "+element.nome)// Adiciona o nome do pais no card.

        if (element.capital === undefined){// Se o pais não tiver capital ele vai adicionar "Sem Capital" no card.
            $('.card-capital-pais',cloneCard).html("<b>Capital:</b> Sem Capital");
        } else {// Se o pais tiver capital ele vai adicionar a capital no card.
            $('.card-capital-pais',cloneCard).html("<b>Capital:</b> "+element.capital);
        }
        $('.card-pop-pais',cloneCard).html("<b>População:</b> "+element.populacao);// Adiciona a população do pais no card.

        var stringObjetoPais = JSON.stringify(element);// Transforma o objeto em string para ser passado como parametro na função removeFavoritos.
        $('.btn-favoritos', cloneCard).attr("onclick", "removeFavoritos("+stringObjetoPais+")");// Adiciona a função removeFavoritos no botão de favoritos.
        $('.btn-detalhes', cloneCard).attr("onclick", "abrirDetalhesPais("+stringObjetoPais+")");// Adiciona a função abrirDetalhesPais no botão de detalhes.

        $('#countries').append(cloneCard);// Adiciona o card no html.
        //$('#countries') = div dos card de países (??)
    });
}

//L[] = 150 / 3 - ROUND(terc) -> RND1 = RND(0,terc) RND2 = RND(trc+1,terc*2) RND3 = RND(terc*2+1, terc*3) para fazer as 3 principais
function removeFavoritos(pais) {// Função para remover o pais dos favoritos.
    var arrayPaisesFavoritos; // Cria um array para armazenar os paises favoritados.

    var botao = event.target.closest('button');// Pega o botão que foi clicado não discrimina qual foi clicado.
    
    if (localStorage.getItem("pais") === null) {// Se não tiver pais favoritados ele vai:
        arrayPaisesFavoritos = []// Cria um array vazio.

        arrayPaisesFavoritos.push(pais);// Adiciona o pais no array.

        var favoritosStorage = JSON.stringify(arrayPaisesFavoritos);// Transforma o array em string para ser armazenado no localstorage e transforma no favoritos.

        localStorage.setItem("pais", favoritosStorage);// Armazena o array no localstorage.
    } else {// Se tiver pais favoritados ele vai:
        arrayPaisesFavoritos = JSON.parse(localStorage.getItem("pais"));// Pega os paises favoritados no localstorage e transforma em um array de objetos.

//(??)//a fução basicamente ele vai procurar a posição que ele ocupa no array e vai remover ele.
        var index  = arrayPaisesFavoritos.findIndex(s => s.nome == pais.nome); //o findindex troca o for, ao utilizar o findindex ele devoolve automaticamente o idex do pais se for encontrado senão ele devolve -1
        if ( index != -1) {
            arrayPaisesFavoritos.splice(index, 1);// Remove o pais do array.

            var favoritosStorage = JSON.stringify(arrayPaisesFavoritos);
            localStorage.setItem("pais", favoritosStorage);
        } 
//(??)
    }
    window.location = "./favoritos.html";// Redireciona para a pagina de favoritos(E tipo um Referesh).
    //Pode ser feito de outro jeito criando uma função que elimine o item em vez de atualizar a pagina, assim mesmo sem internet podendo funcionar.
}

function atualizarEstadoBotoes() {// Função para atualizar o estado dos botões.
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
function abrirDetalhesPais(pais) {// Função para abrir os detalhes do pais.
    var arrayDetalhesPaises;// Cria um array para armazenar os detalhes do pais.   

    //var botao = event.target.closest('button');
    arrayDetalhesPaises = []
    arrayDetalhesPaises.push(pais);// Adiciona o pais no array.

    var detalhesStorage = JSON.stringify(arrayDetalhesPaises)// Transforma o array em string para ser armazenado no localstorage e transforma no detalhes.
    localStorage.setItem("detalhesPaisSelecionado", detalhesStorage);// Ele vai pegar o detalgesStorage e vai armazenar no DetalhesPaisSelecionado.

    window.location = "./detalhes.html";// Redireciona a pagina para detalhes.html.
}

function verificarTamanhoEcranRedimencionarBotões() {//(??)
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