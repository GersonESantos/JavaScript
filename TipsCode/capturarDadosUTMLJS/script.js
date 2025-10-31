// Script para capturar dados do formulário e mostrar no #output
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('meuFormulario');
    const output = document.getElementById('output');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // evita envio/refresh da página

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();

        if (!nome || !email) {
            output.textContent = 'Preencha nome e email.';
            output.style.color = 'red';
            return;
        }

        // mostra os dados de forma segura (sem innerHTML direto)
        output.style.color = '';
        output.textContent = `Nome: ${nome} | Email: ${email}`;

        // opcional: limpar formulário e focar no campo nome
        form.reset();
        document.getElementById('nome').focus();
    });
});