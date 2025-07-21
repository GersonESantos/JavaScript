# CAPÍTULO 1
JavaScript – uma visão geral rápida

Estrutura de dados e algoritmos em JavaScript
Configurando o ambiente
Usando servidores web
http-server do Node.js
Básico sobre o JavaScript
Variáveis
Escopo das variáveis
Operadores

Verdadeiro e falso
Funções dos operadores de igualdade (== e ===)
Estruturas de controle
Instruções condicionais
Laços
Funções
Programação orientada a objetos em Javascript

Objetos JavaScript são coleções bem simples de pares nome-valor. Há duas
maneiras de criar um objeto simples em JavaScript. 
A primeira é esta:
var obj = new Object();
A segunda é assim:
var obj = {};
Também podemos criar um objeto completo, desta maneira:
obj = {
name: {
first: 'Gandalf',
last: 'the Grey'
},
address: 'Middle Earth'
};
Como  podemos  ver,  para  declarar  um  objeto  JavaScript,  pares  [chave,
valor] são usados, no quais a chave pode ser considerada um atributo do
objeto, e o valor é o valor da propriedade. Todas as classes que criaremos
neste  livro  serão  objetos  JavaScript,  como  Stack,  Set,  LinkedList,
Dictionary, Tree, Graph, e assim por diante.
Em POO (Programação Orientada a Objetos), um objeto é uma instância
de uma classe. Uma classe define as características do objeto. Em nossos
algoritmos  e  estruturas  de  dados,  criaremos  algumas  classes  que
representarão  objetos.  Eis  o  modo  como  podemos  declarar  uma  classe
(construtor) que representa um livro:
function Book(title, pages, isbn) {
this.title = title;
this.pages = pages;
this.isbn = isbn;
}
Para instanciar essa classe, podemos usar o código a seguir:
var book = new Book('title', 'pag', 'isbn');
Então, podemos acessar as suas propriedades e atualizá-las deste modo:
console.log(book.title); // exibe o título do livro
book.title = 'new title'; // atualiza o valor do título do livro
console.log(book.title); // exibe o valor atualizado
Uma classe também pode conter funções (em geral, também são chamadas
de  métodos).  Podemos  declarar  e  usar  uma  função/método  conforme
mostra o código a seguir:
Book.prototype.printTitle = function() {
console.log(this.title);
};
book.printTitle();
Também podemos declarar funções diretamente na definição da classe:
function Book(title, pages, isbn) {
this.title = title;
this.pages = pages;
this.isbn = isbn;
this.printIsbn = function() {
console.log(this.isbn);
};
}
book.printIsbn();