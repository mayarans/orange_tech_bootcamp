const etanol = 3.50
const gasolina = 5.32
const tipoCombustivel = 'etanol'
const litroPorKm = 0.1
const distanciaEmKm = 50

if (tipoCombustivel == 'etanol') {
  valorViagem = (distanciaEmKm*litroPorKm) * etanol
} else if (tipoCombustivel == 'gasolina') {
  valorViagem = (distanciaEmKm*litroPorKm) * gasolina
}

console.log('R$' + valorViagem.toFixed(2))