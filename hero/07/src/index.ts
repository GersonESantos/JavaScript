class Aves {
    especie: string;
    age: number;
  
  constructor(especie: string, age: number) {
    this.especie = especie;
    this.age = age;
  }

   voar(){
      console.log('voando!');
    }

    comer(){
      console.log('comendo!');
    }
    
    // Novos métodos adicionados
    dormir() {
      console.log('dormindo!');
    }
    
    cantar() {
      console.log('cantando!');
    }
    
    pousar() {
      console.log('pousando!');
    }
    
    info() {
      console.log(`Espécie: ${this.especie}, Idade: ${this.age} anos`);
    }
    
    // Método similar ao do exemplo
    method() {
      console.log('Hello from Aves!');
    }
}
class Pato extends Aves {
    constructor(especie: string, age: number) {
        super(especie, age);
    }
    // Sobrescrevendo o método info
    // Método específico para Pato
    quack() {
        console.log(' quack! quack!  quack!');
    }
     method() {
      console.log('Hello from Aves!');
    }
}
class Galinha extends Aves {
    constructor(especie: string, age: number) {
        super(especie, age);
    }
    // Método específico para Galinha
    cacarejar() {
        console.log(' cacarejando! co co rio co');
    }
    voar(){
      console.log('Galinha não voa muito bem!');

    }
     method() {
      console.log('Hello from Aves!');
    }
}

const aves = new Aves('Pombo', 68);

console.log('Aves instance created:', aves);
aves.voar();
aves.comer();
aves.dormir();
aves.cantar();
aves.pousar();
aves.info();
aves.method(); // Chamando o novo método
const myespecie = aves.especie;
console.log('minha especie ' + myespecie);
const myAge = aves.age;
console.log('minha idade ' + myAge);

const pato = new Pato('Pato', 5);
console.log('Aves instance created:', pato);
pato.quack();
pato.voar();
pato.comer();
pato.dormir();
pato.cantar();
pato.pousar();
pato.info();
pato.method(); // Chamando o novo método
const galinha = new Galinha('Galinha', 8);
console.log('Aves instance created:', galinha);
galinha.cacarejar();
galinha.voar();
galinha.comer();

galinha.method(); // Chamando o novo método
