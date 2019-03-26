// FUNÇÃO: executa um processo, definido por um bloco de função com todas as senteças a serem executadas

// função sem retorno
function mathCalc(var1, var2) {
    console.log(var1 + var2)
}

mathCalc(5,5) // 10
mathCalc(5) // 5 + undefined = NaN
mathCalc(2,2,3,4,5,6,7,8,9) // 2 + 2 = 4
mathCalc() // undefined + undefined = NaN


// função com retorno
function mathCalcWithReturn(foo1, foo2 = 0) { // param = 0 means that attribution it's the default value
    return foo1 + foo2
}

console.log(mathCalcWithReturn(3,3)) // 6
console.log(mathCalcWithReturn(2)) // 2 + 0 = 2