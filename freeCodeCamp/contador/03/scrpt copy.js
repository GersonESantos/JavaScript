let contador
const valor = document.querySelector('#valor');
const botao = document.querySelectorAll('.botao');

contador = 0;

botao.forEach(function(botao) {
    botao.addEventListener('click', function(e) {
        const estilo = e.currentTarget.classList;
        if (estilo.contains('aumentar')) {
            contador++;
        } else if (estilo.contains('diminuir')) {
            contador--;
        } else {
            contador = 0;
        }   
        valor.textContent = contador;
        if (contador > 0) {
            valor.style.color = 'green';
        } else if (contador < 0) {
            valor.style.color = 'red';
        } else {
            valor.style.color = 'black';
        }   
        valor.textContent = contador;
    });
});

