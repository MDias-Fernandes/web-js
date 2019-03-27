// pair "key": "value"
// context indicates where the variable or function was defined, in other words, where it will be used

const saudacao = 'oi' // contexto léxico 1, possui um determinado espaço de abrangência

function exec() {
    const saudacao = 'iae' // contexto léxico 2, possui um determinado espaço de abrangência
    return saudacao
    // saudacao variable here it's gonna be used (if satisfied) in the context of exec() function
}

// Objetos são grupos aninhados de pares nome/valor
const Client = {
    nome: 'Pedro',
    idade: 50,
    peso: 80,
    endereco: {
        logradouro: 'rua um',
        numero: 12,
        cep: 01455000
    },
    cpf: '11111111111'
}

console.log(saudacao)   // contexto lexico 1
console.log(exec())     // contexto lexico 2
console.log(Client)     // Objeto em Javascript