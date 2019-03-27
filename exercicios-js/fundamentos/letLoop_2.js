var funcs =  []

for(let i=0; i<10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]() // let has a block scope, for each repetition has a space in memory that have a position of i in the indexes
funcs[8]() // let has a block scope, for each repetition has a space in memory that have a position of i in the indexes