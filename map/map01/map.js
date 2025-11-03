const numeros = [1, 2, 3, 4, 5];

const cuadrados = numeros.map(function(numero) {
    return numero * numero;
});

console.log(cuadrados); // [1, 4, 9, 16, 25]