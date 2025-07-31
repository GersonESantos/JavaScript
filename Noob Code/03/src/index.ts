export class Animal {
   private tipo: string;
   private nome: string;
   private idade: number;

    constructor(t: string ,n: string, i: number ) {
        this.tipo = t;
        this.nome = n;
        this.idade = i;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
    publicgetIdade() {
        return this.idade;
    }
    publicsetIdade(idade: number) {
        this.idade = idade;
    }
}

class cachorro extends Animal {
    private raca: string;

    constructor(t: string, n: string, i: number, r: string) {
        super(t, n, i);
        this.raca = r;
    }

    apresentar() {
        super.apresentar();
        console.log(`Eu sou um ${this.raca}.`);
    }
}
class Pessoa extends Animal {
    profissao: string;

    constructor(t: string, n: string, i: number, p: string) {
        super(t, n, i);
        this.profissao = p;
    }

    apresentar() {
        super.apresentar();
        console.log(`Eu sou um(a) ${this.profissao}.`);
    }
}
let c1 = new cachorro("Cachorro", "Rex", 5, "Labrador");
c1.apresentar();
let p1 = new Pessoa("Pessoa", "Ana", 28, "Engenheira");
p1.apresentar();
