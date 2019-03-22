// Grouped elements

const arr_values = [1,4,8,1.9,2.9]
console.log(arr_values)
console.log(arr_values[0], arr_values[4])

console.log(arr_values[5]) // undefined
arr_values[5] = 12.290
console.log(arr_values[5]) // 12.290
arr_values[9] = 42.8623
console.log(arr_values[9]) // 42.8623
console.log(arr_values) // [ 1, 4, 8, 1.9, 2.9, 12.29, <3 empty items>, 42.8623 ]

console.log(arr_values.length) // 10

arr_values.push({id:10}, null, 'String', false, !!true) // add elements to array
console.log(arr_values) // [ 1, 4, 8, 1.9, 2.9, 12.29, <3 empty items>, 42.8623, { id: 10 }, null, 'String', false, true ]
arr_values.pop() // remove the last one element from array
console.log(arr_values)

delete arr_values[1] // delete the correspondent index from array
console.log(arr_values) // [ 1, <1 empty item>, 8, 1.9, 2.9, 12.29, <3 empty items>, 42.8623, { id: 10 }, null, 'String', false, true ]