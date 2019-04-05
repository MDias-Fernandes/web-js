// binários
function shopping(work1, work2) {

    const buyIceCream = work1 || work2  //operador binário
    const buyTv50 = work1 && work2      //operador binário
    const buyTv32 = work1 != work2      //operador binário
    const keepHealthful = !buyIceCream  //operador unário

    return {buyIceCream, buyTv50, buyTv32, keepHealthful}
}

console.log(shopping(true, true))
console.log(shopping(false, true))
console.log(shopping(true, false))
console.log(shopping(false, false))


// unários
let num1 = 1
let num2 = 2
num1++
console.log(num1)
num2--
console.log(num2)

// ternários
const result = (nota) => nota >= 7 ? "passou" : "reprovou" // const VARIABLE = (PARAMETER) => block of FUNCTION
console.log(result(10)) //passou
console.log(result(7))  //passou
console.log(result(6))  //reprovou