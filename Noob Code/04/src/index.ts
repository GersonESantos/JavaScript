export class Animal {
   private tipo: string;
   private nome: string;
   private idade: number;

    constructor(t: string ,n: string, i: number ) {
        this.tipo = t;
        this.nome = n;
        this.idade = i;
    }

    public comunicar(): void {
        console.log(`Olá, eu sou um metodo da classe mae (Animal).`);
    }
    apresentar() {
        console.log(`Olá, eu sou um ${this.tipo}, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
    public getIdade() {
        return this.idade;
    }
    public setIdade(idade: number) {
        this.idade = idade;
    }
}

class cachorro extends Animal {
    private raca: string;

    constructor(t: string, n: string, i: number, r: string) {
        super(t, n, i);
        this.raca = r;
    }
 public comunicar(): void {
        console.log(`Olá, eu sou um metodo da classe filha (cachorro).`);
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
public comunicar(): void {
        console.log(`Olá, eu sou um metodo da classe filha (Pessoa).`);
    }
    apresentar() {
        super.apresentar();
        console.log(`Eu sou um(a)  ${this.profissao}.`);
    }
}
let a1 = new Animal("Animal", "Genérico", 10);
a1.apresentar();
a1.comunicar();

let c1 = new cachorro("Cachorro", "Rex", 5, "Labrador");
c1.apresentar();
c1.comunicar();

let p1 = new Pessoa("Pessoa", "Ana", 28, "Engenheira");
p1.apresentar();
p1.comunicar();