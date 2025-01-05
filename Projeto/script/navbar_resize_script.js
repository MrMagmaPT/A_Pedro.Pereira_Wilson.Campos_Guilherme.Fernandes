function verificarTamanhoEcran() {
    var logo = document.getElementById('Logo');
    if (window.innerWidth <= 400) {
      logo.src = "img/IPL-Curto.png";


    } else {
      logo.src = "img/IPL-Completo.png";

    }

    var conteiner_japao = document.getElementById("imagem-carosel-japao");
    var conteiner_australia = document.getElementById("imagem-carosel-australia");

    if (window.innerWidth <= 425) {
      conteiner_japao.className = "col-5 margem-exagero";
      conteiner_australia.className = "col-5 margem-exagero";
      console.log(conteiner_australia);
      console.log(conteiner_japao);
    } else {
      conteiner_japao.className = "col-5";
      conteiner_australia.className = "col-5";
    }
    
}


// Corre a função ao carregar a página e ao redimensionar a janela
window.addEventListener('load', verificarTamanhoEcran);
window.addEventListener('resize', verificarTamanhoEcran);