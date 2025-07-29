const produtos = [
    { id: 1, nome: "Produto 1", preco: 10.0 , peso: 1.0 },
    { id: 2, nome: "Produto 2", preco: 20.0 , peso: 2.0 },
    { id: 3, nome: "Produto 3", preco: 30.0 , peso: 3.0 },
];

    calcularFrete: (cep) => {
        // Simulação de cálculo de frete
        const taxaBase = 5.0;
        const distancia = cep ? 10 : 0; // Simula uma distância baseada no CEP
        return taxaBase + (distancia * 0.5);
    }

const categoria = {
    id: 1,
    nome: "Monitores",
    descricao: "Monitores de alta qualidade",
    banner: "https://example.com/banner.jpg",
    obterDestaque: () => {
        return produtos.filter(produto => produto.preco > 15.0);
    },
};
