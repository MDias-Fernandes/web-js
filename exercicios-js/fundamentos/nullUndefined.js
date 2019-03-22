let var1 // not initialized
console.log(var1) // undefined

var1 = null // haven't a value
console.log(var1) // null

const product = {
    preco: null
}
console.log(product)         // {preco: null} - Entire key value object
console.log(product.preco)   // null - Just the value of the specified key
console.log(!!product.preco) // false - Convertion to boolean