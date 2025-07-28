class MyFirstClass {
    name: string;
    age: number;

  constructor() {
    this.name = 'GersonES';
    this.age = 68;
  }
  method() {
    console.log('Hello from MyFirstClass!');
  }
}
const myFirstClass = new MyFirstClass();
const myName = myFirstClass.name;
const myAge = myFirstClass.age;
myFirstClass.method();
console.log(myName);
console.log(myAge);
