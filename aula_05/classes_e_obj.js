/* Criando classe livros e comparando ano de publicação entre dois livros */

class Livro {
  constructor (titulo, editora, anoPublicacao) {
    this.titulo = titulo;
    this.editora = editora;
    this.anoPublicacao = anoPublicacao;
  }
  descrever() {
    console.log(`Título do livro: ${this.titulo}\nEditora: ${this.editora}\nAno de publicação: ${this.anoPublicacao}`);
  
  }
}

function compararLivros(l1, l2) {
  if (l1.anoPublicacao > l2.anoPublicacao) {
    console.log(`O livro ${l2.titulo} é mais antigo que o livro ${l1.titulo}`);
  } else {
    console.log(`O livro ${l1.titulo} é mais antigo que o livro ${l2.titulo}`);
  }
}

const livro1 = new Livro('Mundo de Sofia', 'Amanhecer', 1995);
const livro2 = new Livro ('Dia do Curinga', 'Primavera', 1890);
compararLivros(livro1, livro2);