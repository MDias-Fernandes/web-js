{ 
    { 
        { 
            { 
                var var1 = "Value of var1"
                console.log(var1)
            }    
        } 
    } 
}

console.log(var1)

// Escopo - onde a variável é acessível
// var1 será acessível em todo o código, já que não pertence a uma function específica

function var2() {
    var local = 12345
    console.log(local) // it's called inside function that contains de local
}

var2()
console.log(local) // ReferenceError: local is not defined, in other words, local isn't accessible

// Global scope isn't the best approach, it's a var? Associate it in a function