function rand([min= 40, max= 50]){
    if ( min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([10]))
console.log(rand([]))
console.log(rand([, 51]))
console.log(rand([1, 3]))