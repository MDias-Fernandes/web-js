// Keys {} in js represents an literaly object, curly brackets [] represents an array
// Objects in js it's a key value collection
// JSON it's an textual object

const product_1 = {} // product_1 is now an literaly OBJECT that could have dynamic methods created
product_1.nome = 'Smartwatch'
product_1.preco = 3500.99
console.log(product_1) // { nome: 'Smartwatch', preco: 3500.99 }



const product_2 = {
    nome: 'Smartphone',
    preco: 2500.99
}
console.log(product_2) // { nome: 'Smartphone', preco: 2500.99 }
product_2.cor = 'preto'
console.log(product_2) // { nome: 'Smartphone', preco: 2500.99, cor: 'preto' }