// 1) Crie uma classe para representar carros. 
// Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
// Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
// gasto em reais para realizar este percurso.


class Carro {
  constructor(marca, cor, gastoCombustivelPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoCombustivelPorKm = gastoCombustivelPorKm;
  }
  descrever() {
    console.log(`O carro da marca ${this.marca} tem a cor ${this.cor} e tem um gasto de ${this.gastoCombustivelPorKm} litros por KM rodado`);

  }
}

const c1 = new Carro('Hyundai', 'vermelha', 0.1);

function gastoViagem (quantKm, precoCombustivel) { 
  const gasto = (quantKm * c1.gastoCombustivelPorKm) *precoCombustivel;
  return gasto;
}

/* Chamando a função com os parâmetros desejados */
console.log(`Gasto com a viagem: R$${gastoViagem(50, 5.50).toFixed(2)}`);