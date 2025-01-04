$(document).ready(function(){
    getPaises("1");
})

var cloneOriginalCard = $('.card-countries').clone();

function getPaises() {
    $('#countries').html('');
    $.ajax({
        method:'GET',
        url:'https://restcountries.com/v3.1/all'
    }).done(function(dados){    
        var cont = 0;
        dados.forEach(element =>{
            cont = cont + 1;
        });
        divi = Math.round(cont/3);

        RandomPais1 = Math.floor(Math.random() * (divi - 1)) + 1;
        RandomPais2 = Math.floor(Math.random() * ((divi*2) - (divi+1))) + divi+1;
        RandomPais3 = Math.floor(Math.random() * ((divi*3) - ((divi*2)+1))) + ((divi*2)+1);
        
        //dá um numero random dentro de um intervalo predeterminado esquema -> RandomPais1 = Math.floor(Math.random() * (max - min) ) + min;
        
        var objetoPais1 = {
            "nome":dados[RandomPais1].name.common,
            "capital":dados[RandomPais1].capital === undefined ? "Sem Capital" : dados[RandomPais1].capital[0],
            "populacao":dados[RandomPais1].population,
            "bandeira":dados[RandomPais1].flags.png
        }
        var objetoPais2 = {
            "nome":dados[RandomPais2].name.common,
            "capital":dados[RandomPais2].capital === undefined ? "Sem Capital" : dados[RandomPais2].capital[0],
            "populacao":dados[RandomPais2].population,
            "bandeira":dados[RandomPais2].flags.png
        }
        var objetoPais3 = {
            "nome":dados[RandomPais3].name.common,
            "capital":dados[RandomPais3].capital === undefined ? "Sem Capital" : dados[RandomPais3].capital[0],
            "populacao":dados[RandomPais3].population,
            "bandeira":dados[RandomPais3].flags.png
        }
        var vetor3PaisRandom = [objetoPais1,objetoPais2,objetoPais3]

        for (i = 0; i < 3; i++) {
            var cloneCard = cloneOriginalCard.clone();

            element = vetor3PaisRandom[i];

            $('.card-title-pais',cloneCard).html(element.nome)
            $('.card-img-top',cloneCard).attr('src', element.bandeira);

            var objetoPais = {
                "nome":element.nome,
                "capital":element.capital === undefined ? "Sem Capital" : element.capital,
                "populacao":element.populacao,
                "bandeira":element.bandeira
            }
            var stringObjetoPais = JSON.stringify(objetoPais);
            $('.ir-detalhes', cloneCard).attr("onclick", "abrirDetalhesPais("+stringObjetoPais+")");
            $('#countries').append(cloneCard);
        }
        //verificarTamanhoEcranRedimencionar();    
    });
}

function abrirDetalhesPais(pais) {
    var arrayDetalhesPaises;   
    console.log(pais); //TEMP
    //var botao = event.target.closest('button');
    arrayDetalhesPaises = []
    arrayDetalhesPaises.push(pais);

    var detalhesStorage = JSON.stringify(arrayDetalhesPaises)
    localStorage.setItem("detalhesPaisSelecionado", detalhesStorage);
    window.location = "./detalhes.html";
}








function verificarTamanhoEcranRedimencionar() {
    /*const botoes = document.getElementsByClassName('btn-detalhes');
    
    for (var i = 0; i < botoes.length; i++) {
        
        var button_detalhes =  botoes[i];
        if (window.innerWidth <= 600) {
           button_detalhes.innerHTML = "<big>⁉</big>";
        } else if (window.innerWidth <= 650){    
            button_detalhes.innerHTML = "Detalhes ⁉";
        } else {
            button_detalhes.innerHTML = "<big>Detalhes ⁉</big>";
        }
    }*/
    
}

// Corre a função ao carregar a página e ao redimensionar a janela
window.addEventListener('resize', verificarTamanhoEcranRedimencionar);
