var coffees = ["French Roast", "Colombian", "Kona"];
var fish = ["Lion", , "Angel"];
// (fish[0] é "Lion", fish[1] é undefined, e fish[2] é "Angel" ).
var vendas = "Toyota";

function tipoCarro(nome) {
  if (nome == "Fiat") {
    return nome;
  } else {
    return "Desculpa, não vendemos carros " + nome + ".";
  }
}

var carro = {
  meuCarro: "Punto",
  getCarro: tipoCarro("Fiat"),
  especial: vendas,
};

console.log(carro.meuCarro); // Punto
console.log(carro.getCarro); // Fiat
console.log(carro.especial); // Toyota


var carro = { carros: { a: "Saab", b: "Jeep" }, 7: "Mazda" };

console.log(carro.carros.b); // Jeep
console.log(carro[7]); // Mazda

var unusualPropertyNames = {
  "": "Uma string vazia",
  "!": "Bang!"
}
// console.log(unusualPropertyNames."");   // SyntaxError: string inesperada
console.log(unusualPropertyNames[""]);  // Um string vazia
// console.log(unusualPropertyNames.!);    // SyntaxError: símbolo ! inesperado
console.log(unusualPropertyNames["!"]); // Bang!
var foo = { a: "alpha", 2: "two" };
console.log(foo.a); // alpha
console.log(foo[2]); // two
//console.log(foo.2);  // Error: missing ) after argument list
//console.log(foo[a]); // Error: a não está definido
console.log(foo["a"]); // alpha
console.log(foo["2"]); // two
console.log("John's cat".length);
// Irá exibir a quantidade de caracteres na string incluindo o espaço em branco.
// Nesse caso, 10 caracteres.
var quote = "Ele lê \"The Cremation of Sam McGee\" de R.W. Service.";
console.log(quote);
// Irá exibir a string com as aspas escapadas.
var str = "Ele lê \"The Cremation of Sam McGee\" de R.W. Service.";
console.log(str);
// Irá exibir a string com as aspas escapadas.
var str =
  "esta string \
está quebrada \
em várias\
linhas.";
console.log(str); // esta string está quebrada em várias linhas.
