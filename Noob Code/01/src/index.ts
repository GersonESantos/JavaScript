class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
}

const pessoa1 = new Pessoa("João", 30);
pessoa1.apresentar();

const pessoa2 = new Pessoa("Maria", 25);
pessoa2.apresentar();

const pessoa3 = new Pessoa("Pedro", 35);
pessoa3.apresentar();