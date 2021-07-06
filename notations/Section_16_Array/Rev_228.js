const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //Retira o último elemento do Array
console.log(pilotos)

pilotos.push('Verstappen') //Adiciona uma última posição no Array com o elemento descrito
console.log(pilotos)

pilotos.shift() //Remove o primeiro elemento do Array
console.log(pilotos)

pilotos.unshift('Hamilton') //Adiciona na primeira posição do Array o elemento descrito
console.log(pilotos)

//Splice pode adicionar e/ou remover elementos do Array

//Adicionando
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//Removendo
pilotos.splice(3, 1)
console.log(pilotos)
console.log(pilotos.length)

if(pilotos.length == 5){
    console.log('Entrou no if')
}

const algunsPilotos1 = pilotos.slice(2) //Novo array 
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)
