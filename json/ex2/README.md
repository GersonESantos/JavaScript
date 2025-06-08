# Exemplo de Fetch API com JSON

Este projeto demonstra como buscar dados de um arquivo JSON local usando a Fetch API em JavaScript e exibi-los em uma página HTML.

## Estrutura do Projeto

```
ex2/
├── index.html     # Arquivo HTML principal que exibe os dados
└── dados.json     # Arquivo JSON contendo os dados dos usuários
```

## Arquivos

### `index.html`

Este arquivo contém a estrutura HTML básica e um script JavaScript. O script:
1.  Seleciona um elemento `div` com o ID `usuarios`.
2.  Usa a `fetch()` API para carregar o arquivo `dados.json`.
3.  Converte a resposta para JSON.
4.  Itera sobre a lista de usuários (esperada em `dados.usuarios`).
5.  Para cada usuário, cria um item de lista (`<li>`) mostrando seu nome e idade.
6.  Insere a lista de usuários formatada dentro do `div#usuarios`.
7.  Inclui tratamento básico de erros para a requisição e processamento dos dados.

### `dados.json`

Este arquivo deve conter os dados dos usuários no formato JSON. A estrutura esperada é um objeto com uma chave `usuarios`, cujo valor é um array de objetos. Cada objeto de usuário deve ter pelo menos as propriedades `nome` (string) e `idade` (número ou string).

Exemplo de `dados.json`:
```json
{
  "usuarios": [
    { "nome": "Ana Silva", "idade": 28 },
    { "nome": "Bruno Costa", "idade": 34 },
    { "nome": "Carla Dias", "idade": 22 }
  ]
}
```

## Como Executar

1.  Certifique-se de que ambos os arquivos, `index.html` e `dados.json`, estejam na mesma pasta.
2.  Crie o arquivo `dados.json` com o conteúdo de exemplo acima (ou seus próprios dados).
3.  Abra o arquivo `index.html` em um navegador da web.

O navegador carregará a página, o script JavaScript buscará os dados do `dados.json` e exibirá os nomes e idades dos usuários na página.