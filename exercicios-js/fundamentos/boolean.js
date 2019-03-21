let isActive = false
console.log(isActive)

isActive = true
console.log(isActive)

isActive = 1
console.log(!isActive)  // !  - it's false = false
console.log(!!isActive) // !! - it's false it's false = true

console.log('os verdadeiros.....') // all bellow it's TRUE
console.log(!!3)
console.log(!!-5)
console.log(!! ' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isActive = 1))
console.log(!!(isActive = true))

console.log('os falsos.....')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isActive = false))

console.log('ORs.............')
console.log(!!('' || null || 0 || ' ')) // At least one of them it's TRUE? == TRUE
console.log(!!('' || null || 0 || NaN)) // At least one of them it's TRUE? == FALSE

let name = ''
console.log(name || 'Unknown')