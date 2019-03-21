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



// ALGUNS CUIDADOS - Números
console.log(7 / 0) // Infinity
console.log("10" * 2) // 20
console.log("10" + 2) // 102 - concat
console.log("Show!" * 2) // NaN
console.log(0.1 + 0.7) // 0.7999999999999999 (By: IEEE)
console.log((10.32839).toFixed(1))



// Math OBJECT
const r = 23.1
const area = Math.PI * Math.pow(r, 2)

console.log(area)
console.log(typeof area)