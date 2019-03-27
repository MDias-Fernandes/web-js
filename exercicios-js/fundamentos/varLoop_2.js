var funcs =  []

for(var i=0; i<10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]() // In reason of i hasn't a block scope, the i value it's equal to 10, var doesn't respect the indexes positions.
funcs[8]() // In reason of i hasn't a block scope, the i value it's equal to 10, var doesn't respect the indexes positions.