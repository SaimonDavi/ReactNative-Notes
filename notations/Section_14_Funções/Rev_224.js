const soma = function (x, y){
    return x + y
}

console.log(soma(1, 2))

const imprimirResultado = function (a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(7, 4, function(x, u){
    return x - u
})
imprimirResultado(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function (){
        console.log('Opa')
    }
}

pessoa.falar()