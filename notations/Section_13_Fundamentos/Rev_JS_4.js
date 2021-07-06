function rand ({ minimo = 0, maximo = 100}){
    const valor = Math.random() * (maximo - minimo) + minimo
    return Math.floor(valor)
}

const objeto = {maximo: 50, minimo: 40}

console.log(rand(objeto))
console.log(rand({minimo: 90}))
console.log(rand({}))