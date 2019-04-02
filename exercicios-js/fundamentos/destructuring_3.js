function rand({min = 0, max = 1000}) {              // destructuring as arguments
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 80, min:70}                       // OBJECT
console.log(rand(obj))          // 70 to 80
console.log(rand({min: 500}))   // 500 to 1000
console.log(rand({}))           // 0 to 1000
console.log(rand())             // ERROR