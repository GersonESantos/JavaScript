var ingredientes = ['farinha', 'açúcar', 'ovo', 'leite', 'manteiga'];
for (var i = 0; i < ingredientes.length; i++) {
    var letraInicial = 
        ingredientes[i].charAt(0).toLowerCase();
        var restoTexto = 
            ingredientes[i].slice(1,10).toLowerCase();
            console.log(letraInicial + restoTexto);
}