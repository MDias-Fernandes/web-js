const pessoa = {
    nome: "Joao",
    idade: 5,
    endereco: {
        logradouro: "Rua dos Tucanos",
        numero: 1200
    }
}

// Retirar determinados atributos de dentro de um objeto

const {nome,idade} = pessoa // retire da estrutura do objeto os atributos declarados entre chaves
console.log(nome, idade)

const {nome: n, idade: i} = pessoa // retire da estrutura do objeto os atributos declarados entre chaves
console.log(n, i)

const {var1 = null, var2 = true} = pessoa // atributos não existentes são 'undefined' e atributos com valor padrão, volta o valor padrão
console.log(var1, var2)

const {endereco: {logradouro, numero} } = pessoa
console.log(logradouro, numero)