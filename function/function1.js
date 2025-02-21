console.log('Gerson 1')

//void
function exibirMensagem() {
    let nome = "Gerson";
    document.getElementById("mensagemSaudaca").textContent = "Olá, " + nome + "!";  

}

exibirMensagem(); 
// Saída: Olá, mundo!

function digaMeuNome()
    {
        console.log('Gerson 2')
    }
digaMeuNome()

function somar(a, b) {
    return a + b;
}

console.log(somar(5, 3)); // Saída: 8





function dizerOla(nome) {
    console.log("Olá, " + nome + "!");
}

dizerOla("Lucas"); // Saída: Olá, Lucas!


 // parmetros
// function digaMeuNome(nome)
//     {
//         const nome = 'Gerson'
//         console.log(nome)
//     }
// digaMeuNome()

// // retorno
// function qualquerNome(nome)
//     {
//         return nome
//     }
