class Pessoa {
    constructor(nome, idade) {
        if (new.target === pessoa) {
            throw new Error("Pessoa é uma classe abstrata e não pode ser instanciada diretamente.");
    }
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
        throw new Error("Método abstrato 'apresentar' deve ser implementado na subclasse.");
    }       
}
// const pessoa1 = new pessoa("João", 30); // Isso lançará um erro

class pessoa extends Pessoa {
    constructor(nome, idade, curso) {
        super(nome, idade);
        this.curso = curso;
    }               
    apresentar() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e estudo ${this.curso}.`;
    }
}
const estudante1 = new estudante("Maria", 20, "Engenharia");