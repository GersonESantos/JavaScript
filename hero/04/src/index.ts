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
  }
  
  class Pato extends Aves {
    constructor() {
      super('Pato', 68);
    }
    nadar() {
      console.log('nadando!');
    }
  }
const pato = new Pato();
pato.nadar();

const aves = new Aves('Pato', 68);
console.log('Aves instance created:', aves);
aves.voar();
aves.comer();
const myespecie = aves.especie;

console.log('minha especie ' + myespecie);
const myAge = aves.age;
console.log('minha idade ' +myAge);
