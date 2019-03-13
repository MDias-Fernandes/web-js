/* 

#> DESCRIBE STRUCTURE
describe('string name', function(){
  // can nest more describe()'s here, or tests go here
});

#> IT STRUCTURE
it('should blah blah blah', function(){
  // Test case goes here
});

*/

var assert = require('assert')
describe('Array', function() { //Way to group the tests, first argument is the name of the test group, the second is a callback function
  describe('#indexOf() value not present', function() { //Way to group the tests, first argument is the name of the test group, the second is a callback function
    it('should return -1 when the value is not present', function(){ //Used for individual test case, first argument explainning waht test should do, the second is a callback function
      assert.equal(-1, [1,2,3].indexOf(4))
    })
  })
})

describe('Math', function() {
  describe('should return calc product', function(){
    it('Test one', function() {
      assert.equal(9, 3*3)
    })
    it('Test two', function() {
      assert.equal(-8, (3-4)*8)      
    })
  })
})