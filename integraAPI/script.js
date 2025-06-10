document.getElementById('fetch-users').addEventListener('click', async () => {
    const usersList = document.getElementById('usersList');
    usersList.innerHTML = 'Carregando...';
    try {
        const response = await fetch('http://localhost:3000/user');
        const users = await response.json();
        if (!users.length) {
            usersList.innerHTML = '<p>Nenhum usuário encontrado.</p>';
            return;
        }
        usersList.innerHTML = '<ul>' + users.map(user =>
            `<li>${user.id} - ${user.username} - ${user.email}</li>`
        ).join('') + '</ul>';
    } catch (err) {
        usersList.innerHTML = '<p>Erro ao buscar usuários.</p>';
    }
});