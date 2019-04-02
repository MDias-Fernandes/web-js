function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const obj1 = [80, 70]                       // ARRAY
const obj2 = {max: 80, min: 70}
console.log(rand([obj1[1], obj1[0]]))        // 70 to 80 - array
console.log(rand([obj2.max, obj2.min]))    // 70 to 80 - object
console.log(rand([min = 500]))             // 500 to 1000
console.log(rand([]))                      // 0 to 1000
console.log(rand())                        // ERROR