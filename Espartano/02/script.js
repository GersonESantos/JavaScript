class Produto {
    constructor(nome, preco) {
        this.id = Math.floor(Math.random() * 1000);
        this.nome = nome;
        this.preco = preco;
    }
    adicionar() {
        alert(`Produto ${this.nome} adicionado com sucesso!`);
    }
    excluir() {
        alert(`Produto ${this.nome} excluído com sucesso!`);
    }
}
let produto = new Produto("Notebook", 2500);