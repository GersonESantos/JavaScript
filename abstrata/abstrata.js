class Pessoa {
    constructor(nome, idade, curso) {
        if (new.target === Pessoa) {
            throw new Error("Pessoa é uma classe abstrata e não pode ser instanciada diretamente.");
    }
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
    }
    apresentar() {
        throw new Error("Método abstrato 'apresentar' deve ser implementado na subclasse.");
    }       
}
// const pessoa = new Pessoa("João", 30); // Isso lançará um erro

class Professor  extends Pessoa {        
    apresentar() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e estudo ${this.curso}.`;
    }
}
class Aluna extends Pessoa {
    apresentar() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e estudo ${this.curso}.`;
    }
}
const professor1 = new Professor("Carlos", 45, "Matemática");
const aluno1 = new Aluna("Maria", 20, "Engenharia");
const aluno2 = new Aluna("Ana", 22, "Medicina");
const pwssoas = [professor1, aluno1, aluno2];

pwssoas.forEach(pessoa => {
    console.log(pessoa.apresentar());
});