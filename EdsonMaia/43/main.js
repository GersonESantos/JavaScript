class Pessoa 
{
    // Atributos
    nome: String;
    idade: Number;
    peso: Float;
    altura: Float;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
}

let pessoa1 = new Pessoa("João", 25);
let pessoa2 = new Pessoa("Maria", 30);
console.log(pessoa1);
console.log(pessoa2);
pessoa1.apresentar();