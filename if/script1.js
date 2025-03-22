function podeDirigir(idade) {
    return idade >= 18 ? "pode dirigir" : "não pode dirigir";
}

var idade = 16;
console.log(podeDirigir(idade)); // não pode dirigir

idade = 18;
console.log(podeDirigir(idade)); // pode dirigir