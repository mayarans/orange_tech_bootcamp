const precoCombustivel = 6.50;
const kmPorLitro = 10;
const distanciaKm = 100;

let valorViagem = (distanciaKm/kmPorLitro)*precoCombustivel;
console.log('R$ ' + valorViagem.toFixed(2));