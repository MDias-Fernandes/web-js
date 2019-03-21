const school = 'cod3r'

console.log(school.charAt(4)) // char r
console.log(school.charCodeAt(4)) // Unicode == 114
console.log(school.indexOf('r')) // index 4
console.log(school.substring(1, 4)) // Start on index 1 and finish on index 3 Cod3r is now od3
console.log(school.substring(1)) // od3r
console.log('School '.concat(school).concat('!')) // Concatenate Strings "School cod3r!"
console.log(school.replace('3', 'e')) // replace 3 by e, so cod3r is now coder

console.log('anna,maria,pedro'.split(',').indexOf('pedro')) // log the index of position
console.log('zana,maria,pedro'.split(',').sort()) // ['maria', 'pedro', 'zana']

let name = 'Tom'
const welcome = 'Hi ' + name + " you're welcome" // Like Java
const concatenation = `Hi ${name} you are welcome!` // use always backTip ` ` `

console.log(welcome)
console.log(concatenation)

//Arrow function
const up = str => str.toUpperCase()
console.log(`Hey... ${up('be careful')}!`)