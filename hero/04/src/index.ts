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

const aves = new Aves('Pato', 68);
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