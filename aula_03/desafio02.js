/* Cálculo do IMC (Índice de massa corporal) de uma pessoa */

const peso = 57.5;
const altura = 1.65;

const IMC = peso / (altura**2);
console.log('IMC igual a ' + IMC.toFixed(1));

if (IMC<18.5) {
  console.log('Você está abaixo do peso');
} else if (IMC >= 18.5 && IMC <25) {
  console.log('Seu peso está normal');
} else if (IMC >= 25 && IMC <30) {
  console.log('Você está acima do peso');
} else {
  console.log('Quadro de obesidade grave');
}