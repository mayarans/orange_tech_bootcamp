function escrevaMeuNome(nome) {
  return 'Meu nome é ' + nome;
}


function verificarIdade (idade) {
  if (idade >= 18) {
    console.log(escrevaMeuNome('Mayara') + ' e eu sou maior de idade');
  } else {
    console.log(escrevaMeuNome('Mayara') + ' e eu sou menor de idade');
  }
};

verificarIdade(20);