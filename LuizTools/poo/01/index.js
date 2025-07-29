const categoria = {
    id: 1,
    nome: "Monitores",
    descricao: "Monitores de alta qualidade",
    banner: "https://example.com/banner.jpg",
    obterDestaque: () => {
        return produto;
    },
};
const produto = 
    { id: 1, nome: "Produto 1", preco: 10.0 , peso: 1.0 }
    

    calcularFrete: (cep, quantidade) => {
        // Simulação de cálculo de frete
        const taxaBase = 5.0;
        const distancia = cep ? 10 : 0; // Simula uma distância baseada no CEP
        const pesoTotal = produtos.reduce((acc, produto) => acc + (produto.peso * quantidade), 0);
        return taxaBase + (distancia * 0.5) + (pesoTotal * 0.1);
    }

