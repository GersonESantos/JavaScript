class Produto {
    constructor(nome, preco) {
        this.id = 1
        this.arrayProdutos = [];     
    }
    salvar() 
    {
        let produto = this.lerDados();
        if (this.validarCampos(produto)) {
            this.adicionar(produto);
        }
        this.listatabela();
        this.cancelar();
    
    }
    listatabela() 
    {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for (let i = 0; i < this.arrayProdutos.length; i++) {
            let tr = tbody.insertRow();
            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_preco = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayProdutos[i].id;
            td_nome.innerText = this.arrayProdutos[i].nome;
            td_preco.innerText = this.arrayProdutos[i].preco;
            td_id.classList.add('center');
            let imgEdit = document.createElement('img');
            imgEdit.src = 'img/iconEditar.png';
            imgEdit.onclick = function() {
                produto.editar(i);
            };
            td_acoes.appendChild(imgEdit);

            let imgDelete = document.createElement('img');
            imgDelete.src = 'img/iconDeletar.png';
            imgDelete.onclick = function() {
                produto.deletar(i);
            };
            td_acoes.appendChild(imgDelete);
        }
    }

    validarCampos(produto) {
        let msg = '';
        if (produto.nome == '') {
            msg += 'Informe o nome do produto\n';
        }
        if (produto.preco == '') {
            msg += 'Informe o preço do produto\n';
        }
        if (msg != '') {
            alert(msg);
            return false;
        }
        return true;
    }
    adicionar(produto) {
        this.arrayProdutos.push(produto);
        this.id++;
    }
    lerDados() {
        let produto = {};
        produto.id =this.id;
        produto.nome = document.getElementById('nome').value;
        produto.preco = document.getElementById('preco').value;

        return {
            id: produto.id,
            nome: produto.nome,
            preco: produto.preco
        };
    }
    cancelar() {
        document.getElementById('nome').value = '';
        document.getElementById('preco').value = '';
        document.getElementById('nome').focus();
    }

deletar(i) {
    let tbody = document.getElementById('tbody');
    for (let j = 0; j < this.arrayProdutos.length; j++) {
        if (this.arrayProdutos[j].id === this.arrayProdutos[i].id) {
            this.arrayProdutos.splice(j, 1);
            tbody.deleteRow(j);
        }
    }

    this.listatabela();
}
editar(i) {
    let produto = this.arrayProdutos[i];
    document.getElementById('nome').value = produto.nome;
    document.getElementById('preco').value = produto.preco;
    this.arrayProdutos.splice(i, 1);
    this.listatabela();
}
}
let produto = new Produto();