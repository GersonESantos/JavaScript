function podeDirigir(idade, cnh) {
    if (idade >= 18 && cnh) {
        return "pode dirigir";
    } else {
        return "não pode dirigir";
    }
}

var resultado = podeDirigir(16, false);
console.log(resultado); // não pode dirigir

resultado = podeDirigir(18, true);
console.log(resultado); // pode dirigir
// Compare this snippet from if/script3.js:
// var pessoa = {           
//     nome: 'João',
//     idade: 20,
//     sexo: 'masculino',
//     cidade: 'São Paulo',
//     apelidos: ['J', 'Jão', 'Jo']
// };

var pessoa = {
    nome: 'João',
    idade: 20,
    sexo: 'masculino',
    cidade: 'São Paulo',
    apelidos: ['J', 'Jão', 'Jo']
};

console.log(pessoa.nome); // João
console.log(pessoa.idade); // 20     
console.log(pessoa.sexo); // masculino
console.log(pessoa.cidade); // São Paulo
console.log(pessoa.apelidos[0]); // J
console.log(pessoa.apelidos[1]); // Jão
console.log(pessoa.apelidos[2]); // Jo