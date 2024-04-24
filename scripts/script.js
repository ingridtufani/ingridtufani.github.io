
document.querySelectorAll('.card--menu').forEach(function(card) {
    card.addEventListener('click', function() {
        
        var buttonText = this.querySelector('span').textContent;

        
        var confirmation = confirm("Do you want to go to " + buttonText + "?");

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
               
            }
        }
    });
});
