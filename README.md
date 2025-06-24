# Explicação dos Projetos JavaScript

Este repositório contém vários pequenos projetos em JavaScript, cada um focado em demonstrar um conceito específico. Abaixo, você encontrará uma explicação detalhada de cada um deles.

## Índice

1.  [Projeto 1: Formulário Interativo (`/input`)](#projeto-1-formulário-interativo-input)
2.  Projeto 2: Requisição de API com `fetch` (`/fetch/fetch01`)
3.  Projeto 3: Captura de Múltiplos Campos (`/Esquisitos`)

---

## Projeto 1: Formulário Interativo (`/input`)

Este projeto demonstra como capturar dados de um formulário HTML e exibi-los na página dinamicamente, sem a necessidade de recarregar a página.

### Objetivo

Criar uma experiência de usuário fluida onde a entrada de dados em um formulário é processada e exibida instantaneamente usando JavaScript.

### Estrutura dos Arquivos

*   **`index.html`**: Contém a estrutura básica da página.
    *   Um `<form>` com `id="myForm"`.
    *   Um campo de texto `<input type="text">` com `id="myInput"`.
    *   Um botão `<button type="submit">`.
    *   Uma `<div>` com `id="output"` para mostrar o resultado.
    *   Os IDs são cruciais para que o JavaScript possa selecionar e manipular esses elementos.

*   **`css/style.css`**: Responsável pela aparência visual.
    *   Utiliza uma fonte externa (`Roboto`) para um visual mais moderno.
    *   Centraliza o conteúdo na página.
    *   Estiliza o formulário como um "card" com fundo branco e sombra.
    *   Define estilos para o campo de input, botão e a área de saída, criando uma interface limpa e coesa.

*   **`script.js`**: O cérebro da aplicação.
    ```javascript
    // Seleciona os elementos do DOM uma única vez para melhor performance
    const myForm = document.getElementById("myForm");
    const myInput = document.getElementById("myInput");
    const outputDiv = document.getElementById("output");

    // Adiciona o "ouvinte" de evento ao formulário
    myForm.addEventListener("submit", function(event) {
        // Impede o comportamento padrão do formulário (que é recarregar a página)
        event.preventDefault();

        // Pega o valor do campo de input no momento do envio
        const inputValue = myInput.value;

        // Exibe o valor capturado na div de saída
        outputDiv.innerText = "Você digitou: " + inputValue;
    });
    ```
    **Análise do Script:**
    1.  **Seleção de Elementos**: Os elementos HTML necessários são selecionados e armazenados em constantes (`myForm`, `myInput`, `outputDiv`). Isso é uma boa prática de performance, pois evita que o navegador tenha que procurar os mesmos elementos repetidamente.
    2.  **Ouvinte de Evento**: `myForm.addEventListener("submit", ...)` anexa uma função ao evento `submit` do formulário. Essa função será executada sempre que o formulário for enviado (ex: ao clicar no botão "Enviar").
    3.  **`event.preventDefault()`**: Esta é a linha mais importante para a interatividade. Ela impede o comportamento padrão do navegador, que seria enviar os dados do formulário para um servidor e recarregar a página.
    4.  **Captura do Valor**: `const inputValue = myInput.value;` lê o texto que o usuário digitou no campo de input.
    5.  **Exibição do Resultado**: `outputDiv.innerText = ...` atualiza o conteúdo da `div` de saída, mostrando ao usuário o valor que ele acabou de inserir.

---

## Projeto 2: Requisição de API com `fetch` (`/fetch/fetch01`)

Este exemplo mostra como fazer uma requisição HTTP para uma API externa usando a `fetch` API do JavaScript, que é a maneira moderna de se comunicar com servidores.

### Objetivo

Buscar dados de um usuário de uma API pública (`reqres.in`) e lidar com sucesso e possíveis erros na requisição.

### Estrutura dos Arquivos

*   **`index.html`**: Apenas um arquivo HTML mínimo para carregar o script. A lógica acontece toda no console do navegador.
*   **`script.js`**: Contém toda a lógica da requisição.
    ```javascript
    fetch('https://reqres.in/api/users/1', {
      method: 'GET',
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Erro HTTP: ${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log('Dados recebidos:', data);
      })
      .catch((error) => {
        console.error('Falha na requisição:', error);
      });
    ```
    **Análise do Script:**
    1.  **`fetch()`**: Inicia a requisição para a URL especificada. O `fetch` retorna uma *Promise*, que representa a conclusão (ou falha) da operação.
    2.  **Primeiro `.then()`**: Este bloco é executado quando o servidor responde.
        *   `res` é o objeto de resposta.
        *   `if (!res.ok)`: É uma verificação crucial. `res.ok` é `true` apenas para respostas com status de sucesso (como 200). Se for um erro (como 404 ou 500), criamos e lançamos um novo erro (`throw new Error(...)`), que interrompe a execução e pula diretamente para o bloco `.catch()`.
        *   `return res.json()`: Se a resposta foi bem-sucedida, este método lê o corpo da resposta e o converte para um objeto JavaScript (JSON). Ele também retorna uma *Promise*.
    3.  **Segundo `.then()`**: Este bloco é executado quando a conversão para JSON é concluída. A variável `data` contém o objeto JavaScript final, que é então exibido no console.
    4.  **`.catch()`**: Este bloco é um "apanhador" de erros. Ele será executado se houver um problema de rede (ex: sem internet) ou se o erro for lançado manualmente no primeiro `.then()`.

---

## Projeto 3: Captura de Múltiplos Campos (`/Esquisitos`)

Este projeto expande o conceito do primeiro exemplo, mostrando como capturar valores de múltiplos campos de um formulário de cadastro.

### Objetivo

Coletar dados de vários inputs de um formulário (nome, sobrenome, e-mail, data) e usá-los para interagir com a página e exibi-los no console de forma organizada.

### Estrutura dos Arquivos

*   **`index.html`**: Um formulário de cadastro mais completo, com campos para nome, sobrenome, e-mail e data de nascimento. Cada `input` tem um `id` único.
*   **`css/style.css`**: Estilização simples com foco na cor verde para dar identidade visual ao formulário.
*   **`js/script.js`**: O script que manipula os dados do formulário.
    ```javascript
    const btn = document.querySelector('#submitbtn');
    const header = document.querySelector('h1');

    btn.addEventListener("click", function(event) {
        event.preventDefault();

        const name = document.querySelector('#name').value;
        // ... (seleciona os outros campos)

        console.table([name, surname, mymail, birthdate]);

        header.innerHTML = "Cadastro de " + name + " " + surname;
    });
    ```
    **Análise do Script:**
    1.  **Seleção de Elementos**: Seleciona o botão e o título `<h1>` usando `document.querySelector`.
    2.  **Ouvinte de Evento**: O evento é anexado ao `click` do botão. Uma prática um pouco melhor seria usar o evento `submit` do formulário, como no primeiro projeto, pois ele também captura o envio via tecla "Enter".
    3.  **`event.preventDefault()`**: Novamente, impede o envio padrão do formulário.
    4.  **Captura de Valores**: Dentro da função, o script seleciona cada campo de input e pega seu valor (`.value`).
    5.  **`console.table()`**: Uma forma muito útil e visualmente agradável de exibir múltiplos dados no console do navegador, formatando-os como uma tabela.
    6.  **Atualização do DOM**: `header.innerHTML = ...` modifica o conteúdo HTML do título `<h1>`, personalizando a página com o nome e sobrenome que foram digitados.