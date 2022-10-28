// 3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".

let listaNomes = ['Dante', 'Vera', 'Lis', 'Verônica', 'Rublo', 'Vandré', 'Govinda'];

for (let i = 0; i < listaNomes.length; i++) {
  const primeiraLetra = listaNomes[i][0];
  if (primeiraLetra == 'V') {
    console.log(listaNomes[i]);
  }
}