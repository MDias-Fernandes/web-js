let a = 3

console.log(this.a)     // undefined
console.log(global.a)   // undefined

this.c = 456    
global.d = 876  // exporta para fora do arquivo

console.log(this.c)     // 456
console.log(global.d)   // 876

// Em node cada arquivo é um módulo
// É possível exportar os objetos do módulo com o module.exports

// CONHECER O RUNTIME EM QUE A APLICAÇÃO js SERÁ EXECUTADA
    // PADRÕES DE PROJETO
    // DESIGN PATTERNS
    // NUNCA VARIÁVEIS GLOBAIS

console.log(module.exports) // this.c