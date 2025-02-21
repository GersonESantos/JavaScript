function teste1() {
    alert('Você clicou no Botão de teste 1');
}

function teste2() {
    alert('Você clicou no Botão de teste 2');
}

function mudarNome() {
    let nome = prompt("Qual é o seu nome?");
    if (nome) {
        document.getElementById("mensagemSaudacao").textContent = "Olá, " + nome + "!";
    }
}

function dizerOla() {
    document.getElementById("mensagemOla").textContent = "Olá, " + "Gerson" + "!";

}

function dobrar(numero) {
    return numero * 2;
}

const somar = function(a, b) {
    return a + b;
};

const multiplicar = (x, y) => x * y;

function processarNumero(numero, callback) {
    return callback(numero);
}

function aoQuadrado(n) {
    return n * n;
}

function criarMultiplicador(multiplicador) {
    return function(numero) {
        return numero * multiplicador;
    };
}

// Testes no console
dizerOla("Lucas");
console.log(dobrar(4)); // Saída: 8
console.log(somar(5, 7)); // Saída: 12
console.log(multiplicar(3, 4)); // Saída: 12
console.log(processarNumero(5, aoQuadrado)); // Saída: 25
const dobrarNumero = criarMultiplicador(2);
console.log(dobrarNumero(5)); // Saída: 10
