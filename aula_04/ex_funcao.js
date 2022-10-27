/* Cálculo do IMC (Índice de massa corporal) de uma pessoa com função */

function imc (peso, altura) {
  return (peso/(altura*altura));
}

function classificarIMC(imc) {
  if (IMC<18.5) {
    return 'Você está abaixo do peso!';
  } else if (IMC >= 18.5 && IMC <25) {
    return 'Seu peso está normal!';
  } else if (IMC >= 25 && IMC <30) {
    return 'Você está acima do peso!';
  } else {
    return 'Quadro de obesidade grave!';
  }
}
const IMC = imc(67, 1.70);
const classificar = classificarIMC(IMC);
console.log('Seu IMC é ' + IMC.toFixed(1) + '. ' + classificar);