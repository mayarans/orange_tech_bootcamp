/* Cálculo do preço a ser pago por um produto a depender do tipo de pagamento escolhido */

const preco = 139.50;
const tipoPagamento = 'crédito';
console.log('Compra de R$ ' + preco.toFixed(2) + ' no ' + tipoPagamento);

if (tipoPagamento =='débito') {
  desconto = 0.90*preco;
  console.log('Total a pagar: R$ ' + desconto.toFixed(2));
} else if (tipoPagamento == 'dinheiro' || tipoPagamento == 'PIX') {
  desconto = 0.85*preco;
  console.log('Total a pagar: R$ ' + desconto.toFixed(2));
} else if (tipoPagamento == 'crédito') {
  const parcelas = 4;
  if (parcelas == 2) {
    console.log('Total a pagar: R$ ' + preco.toFixed(2));
  } else {
    const juros = preco + (0.10*preco);
    console.log('Total a pagar: R$ ' + juros.toFixed(2));
  }
}