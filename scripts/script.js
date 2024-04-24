// Adiciona um evento de clique a cada div com a classe "card--menu"
document.querySelectorAll('.card--menu').forEach(function(card) {
    card.addEventListener('click', function() {
        // Obtém o texto do span dentro da div clicada
        var buttonText = this.querySelector('span').textContent;

        // Exibe um alerta para confirmar a ação
        var confirmation = confirm("Do you want to go to " + buttonText + "?");

        // Se o usuário confirmar, redireciona para o URL correspondente com base no texto do span
        if (confirmation) {
            switch (buttonText) {
                case 'RESUME':
                    window.location.href = './index.html';
                    break;
                case 'HTML CHEAT SHEET':
                    window.location.href = './htmlcheatsheet.html';
                    break;
                case 'CSS CHEAT SHEET':
                    window.location.href = 'csscheatsheet.html';
                    break;
                // Adicione mais casos conforme necessário
            }
        }
    });
});
