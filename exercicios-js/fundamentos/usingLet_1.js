var n1 = 1 
{
    let n1 = 2
    console.log('inside', n1)
    // has block scope, function scope and global scope
    // looks the near scope for the value called, if hasen't value on actual scope, he finds it in a more abranget scope until find
}
console.log('outside', n1)