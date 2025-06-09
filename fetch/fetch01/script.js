fetch('https://reqres.in/api/users/1', {
  method: 'GET',
})
  .then((res) => {
    if (!res.ok) {
      // Se a resposta não for bem-sucedida (ex: status 404, 500),
      // lança um erro para ser capturado pelo .catch().
      // Isso evita tentar analisar uma resposta de erro como JSON.
      throw new Error(`Erro HTTP: ${res.status} ${res.statusText}`);
    }
    return res.json(); // Se a resposta for OK, converte para JSON.
  })
  .then((data) => {
    console.log('Dados recebidos:', data); // Loga os dados se tudo ocorrer bem.
  })
  .catch((error) => {
    // Captura e loga qualquer erro ocorrido na cadeia de promessas.
    console.error('Falha na requisição:', error);
  });
