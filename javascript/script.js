// Aguarde o conteúdo do site ser carregado
window.addEventListener('load', function() {
    // Defina o tempo de loading em milissegundos (por exemplo, 3000ms = 3 segundos)
    var tempoDeLoading = 3000;

    // Aguarde o tempo definido antes de ocultar a tela de loading
    setTimeout(function() {
        // Oculte a loading screen
        var loadingScreen = document.getElementById('loadingScreen');
        loadingScreen.style.display = 'none';

        // Exiba o conteúdo do site
        var content = document.getElementById('content');
        content.style.display = 'block';
    }, tempoDeLoading);
});