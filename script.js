document.addEventListener("DOMContentLoaded", function() {
    // Captura todos os links do menu
    var links = document.querySelectorAll('nav a');

    // Adiciona um ouvinte de evento de mouseover a cada link
    links.forEach(function(link) {
        link.addEventListener('mouseover', function(event) {
            // Muda a cor do texto para vermelho ao passar o mouse sobre o link
            this.style.color = "#ff0000";
        });

        // Adiciona um ouvinte de evento de mouseout a cada link
        link.addEventListener('mouseout', function(event) {
            // Restaura a cor do texto para preto ao retirar o mouse do link
            this.style.color = ""; // Restaura para a cor padrão definida no CSS
        });
    });
});
