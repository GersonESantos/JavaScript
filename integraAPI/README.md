# API de Lista de Usuários e Tarefas

Este projeto é uma API simples construída com Node.js e Express para gerenciar usuários e suas tarefas, utilizando um banco de dados MySQL.

## Funcionalidades

- Conectar a um banco de dados MySQL.
- Listar todos os usuários.
- Buscar um usuário específico por ID.
- Buscar tarefas de um usuário específico por ID.
- Realizar login de usuário por email.
- Verificar o status da conexão com o banco de dados.

## Tecnologias Utilizadas

- **Node.js:** Ambiente de execução JavaScript no servidor.
- **Express.js:** Framework para construir APIs web.
- **mysql2:** Driver MySQL para Node.js.
- **cors:** Middleware para habilitar o Cross-Origin Resource Sharing.

## Pré-requisitos

- Node.js e npm (ou yarn) instalados.
- Um servidor MySQL em execução.
- Um banco de dados chamado `bd_tasks` com as tabelas `users` e `tasks` devidamente configuradas.

## Configuração do Banco de Dados

Certifique-se de que seu servidor MySQL esteja em execução e que você tenha um banco de dados chamado `bd_tasks`.

**Exemplo de tabelas:**

**Tabela `users`:**
```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    -- outros campos relevantes para usuários
);
```

**Tabela `tasks`:**
```sql
CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_user INT,
    description TEXT NOT NULL,
    status VARCHAR(50), -- ex: 'pendente', 'em andamento', 'concluída'
    -- outros campos relevantes para tarefas
    FOREIGN KEY (id_user) REFERENCES users(id)
);
```

## Instalação e Execução

1.  **Clone o repositório (se aplicável) ou crie a estrutura de arquivos.**
2.  **Crie o arquivo `server.js`** com o conteúdo fornecido.
3.  **Instale as dependências:**
    ```bash
    npm install express mysql2 cors
    ```
    ou
    ```bash
    yarn add express mysql2 cors
    ```
4.  **Configure as credenciais do banco de dados** no arquivo `server.js`:
    Modifique o objeto `connection` com seu host, usuário, senha e nome do banco de dados, se forem diferentes do padrão:
    ```javascript
    const connection = mysql.createConnection({
        host: 'localhost',      // Seu host MySQL
        user: 'root',           // Seu usuário MySQL
        password: 'Gabibi89*',  // Sua senha MySQL
        database: 'bd_tasks'    // Nome do banco de dados
    });
    ```
5.  **Inicie o servidor:**
    ```bash
    node server.js
    ```
    O servidor estará rodando em `http://localhost:3000`.

## Endpoints da API

A seguir estão os endpoints disponíveis na API:

-   **`GET /`**
    -   Descrição: Verifica a conexão com o MySQL e retorna a contagem de usuários ou uma mensagem de status.
    -   Resposta: `MySQL connection OK.` ou `MySQL connection error.`
-   **`GET /user`**
    -   Descrição: Lista todos os usuários cadastrados.
    -   Resposta: Um array JSON com os dados dos usuários.
-   **`GET /user/:id`**
    -   Descrição: Retorna os dados de um usuário específico com base no `id` fornecido.
    -   Resposta: Um objeto JSON com os dados do usuário.
-   **`GET /user/:id/tasks`**
    -   Descrição: Retorna todas as tarefas associadas a um usuário específico com base no `id` do usuário.
    -   Resposta: Um array JSON com as tarefas do usuário.
-   **`GET /login?email=<user_email>`**
    -   Descrição: Busca um usuário pelo `email` fornecido no query parameter.
    -   Exemplo: `http://localhost:3000/login?email=exemplo@email.com`
    -   Resposta: Um array JSON com os dados do usuário correspondente (geralmente um único usuário, se o email for único).

## Exemplo de Consumo (Frontend)

A pasta `integraAPI` também inclui um exemplo simples de frontend para interagir com a API de usuários.

### Arquivos do Frontend

-   **`indec.html`**: A estrutura básica da página web para exibir os usuários.
-   **`style.css`**: Arquivo de estilos para a página (se houver).
-   **`script.js`**: Contém a lógica JavaScript para:
    -   **1. Adicionar um Ouvinte de Evento ao Botão:**
        -   `document.getElementById('fetch-users')`: Seleciona o elemento HTML que possui o ID `fetch-users` (o botão "Buscar Usuários").
        -   `.addEventListener('click', async () => { ... });`: Anexa uma função para ser executada quando o evento de `click` ocorrer nesse botão. A função é `async` para permitir o uso de `await` em operações assíncronas (como chamadas de API).
    -   **2. Preparar a Área de Exibição e Feedback Visual:**
        -   `const usersList = document.getElementById('usersList');`: Obtém a referência ao elemento `div` com o ID `usersList`, que é onde a lista de usuários será renderizada.
        -   `usersList.innerHTML = 'Carregando...';`: Modifica o conteúdo HTML dentro da `div#usersList` para exibir a mensagem "Carregando...", fornecendo feedback visual ao usuário de que a busca está em andamento.
    -   **3. Realizar a Requisição à API (Bloco `try`):**
        -   `try { ... } catch (err) { ... }`: Utiliza um bloco `try...catch` para gerenciar potenciais erros que podem ocorrer durante a requisição à API ou processamento da resposta.
        -   `const response = await fetch('http://localhost:3000/user');`:
            -   `fetch('http://localhost:3000/user')`: Envia uma requisição HTTP GET para o endpoint `/user` da sua API. `fetch` retorna uma *Promise*.
            -   `await`: Pausa a execução da função `async` até que a *Promise* retornada por `fetch` seja resolvida (ou seja, até que o servidor responda). O objeto `Response` é então atribuído à variável `response`.
        -   `const users = await response.json();`:
            -   `response.json()`: Lê o corpo da resposta da API e o converte de uma string JSON para um objeto JavaScript. Este método também retorna uma *Promise*.
            -   `await`: Pausa a execução até que a conversão para JSON seja concluída. O array de objetos de usuário é atribuído à variável `users`.
    -   **4. Processar e Exibir os Dados dos Usuários:**
        -   `if (!users.length) { ... }`: Verifica se o array `users` está vazio (ou seja, se a API não retornou nenhum usuário).
            -   Se estiver vazio, `usersList.innerHTML = '<p>Nenhum usuário encontrado.</p>';` exibe uma mensagem apropriada.
            -   `return;`: Interrompe a execução da função, pois não há mais nada a fazer.
        -   `usersList.innerHTML = '<ul>' + users.map(user => ...).join('') + '</ul>';`: Se houver usuários:
            -   `users.map(user => \`<li>\${user.id} - \${user.username} - \${user.email}</li>\`)`: Itera sobre cada objeto `user` no array `users`. Para cada usuário, cria uma string de template literal que representa um item de lista HTML (`<li>`).
                -   **Nota:** O backend retorna `name` e `email`. Se você quiser exibir o nome, altere `user.username` para `user.name`.
            -   `.join('')`: Concatena todas as strings `<li>` geradas pelo `map` em uma única string HTML.
            -   `'<ul>' + ... + '</ul>'`: Envolve a string de itens de lista com as tags `<ul>` para criar uma lista não ordenada completa.
            -   O `innerHTML` de `usersList` é atualizado com esta lista HTML, exibindo os usuários na página.
    -   **5. Tratar Erros (Bloco `catch`):**
        -   `catch (err) { ... }`: Se qualquer erro ocorrer dentro do bloco `try` (por exemplo, falha de rede, API indisponível, resposta não JSON), o código dentro do `catch` é executado.
        -   `usersList.innerHTML = '<p>Erro ao buscar usuários.</p>';`: Exibe uma mensagem de erro genérica na `div#usersList`. Para depuração, seria útil adicionar `console.error('Erro ao buscar usuários:', err);` aqui.

### Como Executar o Frontend

1.  **Certifique-se de que o servidor da API (backend) esteja em execução:**
    ```bash
    node server.js
    ```
2.  **Abra o arquivo `indec.html` diretamente no seu navegador web.**
3.  Clique no botão "Buscar Usuários" para ver a lista de usuários sendo carregada da API.

## 
