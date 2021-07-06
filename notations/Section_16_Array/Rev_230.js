const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach( function(nome, indice, array) {  //A função "forEach" recebe e identifica apenas as variáveis
    console.log(`${indice + 1}) ${nome}`)           //descritas na "function", nome, indice e array
    console.log(array)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

