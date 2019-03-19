// VARIÁVEIS
// Uso de let é mais moderno que var, para declaração de variáveis
// var   > Possibilidade de redeclarar a mesma variável mais de uma vez
// let   > Impossibilidade de redeclarar a mesma variável mais de uma vez
// const > Constante definida uma única vez, e permanece imutável
var a = 1
let b = 2
console.log(a, b)

var a = 10
b = 20
console.log(a, b)

a = 100
b = 200
const c = 3000
console.log(a, b, c)



// TIPAGEM DINÂMICA - TIPAGEM FRACA
b = 1
console.log(b)
console.log(typeof b) // number

b = 'b'
console.log(b)
console.log(typeof b) // string

b = true
console.log(b)
console.log(typeof b) // boolean



// Números
const peso1 = 1.0
const peso2 = Number('2.5')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

let avaliacao1 = 9.2345
let avaliacao2 = 7.9378

let total = peso1 * avaliacao1 + peso2 * avaliacao2
let media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // exibir apenas os dois números da fração restante
console.log(media.toString()) // conversão para String

console.log(typeof media) // number
console.log(typeof Number) // function



// 