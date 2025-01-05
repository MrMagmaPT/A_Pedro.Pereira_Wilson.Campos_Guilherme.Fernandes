function verificarTamanhoEcran() {
    var logo = document.getElementById('Logo');
    if (window.innerWidth <= 400) {
      logo.src = "img/IPL-Curto.png";


    } else {
      logo.src = "img/IPL-Completo.png";

    }
}


// Corre a função ao carregar a página e ao redimensionar a janela
window.addEventListener('load', verificarTamanhoEcran);
window.addEventListener('resize', verificarTamanhoEcran);