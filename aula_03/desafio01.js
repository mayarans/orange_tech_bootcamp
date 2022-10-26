/* Calculadora de média */

const nota01 = 8;
const nota02 = 7.5;
const nota03 = 6.0;

const media = (nota01 + nota02 + nota03)/3;
console.log('Média igual a ' + media.toFixed(1));

if (media<5) {
  console.log('Reprovado!');
} else if (media < 7 && media >5) {
  console.log('Recuperação');
} else {
  console.log('Aprovado!');
}
  