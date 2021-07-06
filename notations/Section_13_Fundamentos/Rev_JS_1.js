const expressao_numero_1 = 'Bom dia '
const expressao_numero_2 = 'Boa tarde '
const expressao_numero_3 = 'Boa noite '

console.log(expressao_numero_1)

function montagem(a, b) {
    const mensagem = a + b
    return mensagem
}

console.log(montagem(expressao_numero_1, expressao_numero_3))

///

const saudacao = 'Opa'

function exec(){
    const saudacao = 'Falaaa'
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)