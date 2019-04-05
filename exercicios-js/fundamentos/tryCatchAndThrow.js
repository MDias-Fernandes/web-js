

function errorTreatment(error) {
    throw new Error ('Erro de invocação')
    /*throw {
        typeOf: (typeof error),
        errorName: error.name,
        errorCode: error.code,
        errorMessage: error.message
    }
    */
}


function name(obj) {
    try{
        console.log(obj.name.toUpperCase() + " !!!")
    } catch(e) {
        errorTreatment(e)
    } finally {
        console.log('FINAL')
    }
    
}


let personWrong = {nome: "Maria"}
let personRight = {name: "Regina"}
console.log(name(personRight))
console.log(name(personWrong))