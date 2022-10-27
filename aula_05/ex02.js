// 2) Crie uma classe para representar pessoas.
// Para cada pessoa teremos os atributos nome, peso e altura.
// As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
// Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e diga o valor
// do seu IMC;

class Pessoa {
  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

   calculoIMC() {
    return this.peso/(this.altura ** 2);
   }
}

const pessoa1 = new Pessoa('José', 70, 1.75);
const IMC = pessoa1.calculoIMC();
console.log(`O IMC de ${pessoa1.nome} é ${IMC.toFixed(2)}`);