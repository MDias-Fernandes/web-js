console.log(Math.ceil(6.1))

const any1 = {}

any1.nome = 'Nome'
any1.idade = 20

console.log(any1)

function Obj(carFactory) {
    this.factory = carFactory // Recebe o atributo nome por parâmetro e nome será igual a this.nome que é o objeto a ser exposto toda vez que houver uma instância da function
    this.exec = function(model) {
        console.log(`this.exec was called and is instantiated by a function with a parameter that execute me. ${model}`)
    }
}

// this.foo1 = objeto exposto pela classe/function que foi instanciada

console.log(new Obj('Honda').factory)
new Obj('Honda').exec('Civic')