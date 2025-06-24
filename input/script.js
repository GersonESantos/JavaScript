// Seleciona os elementos do DOM uma única vez para melhor performance
const myForm = document.getElementById("myForm");
const myInput = document.getElementById("myInput");
const outputDiv = document.getElementById("output");

// Adiciona o "ouvinte" de evento ao formulário
myForm.addEventListener("submit", function(event) {
    // Impede o comportamento padrão do formulário (que é recarregar a página)
    event.preventDefault();

    // Pega o valor do campo de input no momento do envio
    const inputValue = myInput.value;

    // Exibe o valor capturado na div de saída
    outputDiv.innerText = "Você digitou: " + inputValue;
});
