function podeDirigir(idade) {
    if (idade >= 18) {
        return true;
    } else {
        return false;
    }
}
var idade = 16;
console.log(podeDirigir(idade)); // false