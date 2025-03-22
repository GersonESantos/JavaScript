function podeDirigir(idade, cnh) {
    if (idade >= 18 && cnh) {
        return true;
    } else {
        return false;
    }
}

var idade = 16;
console.log(podeDirigir(idade)); // não pode dirigir

idade = 18;
console.log(podeDirigir(idade)); // pode dirigir