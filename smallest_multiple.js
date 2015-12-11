/**
 * Build a function that finds the smallest positive number that is evenly
 * divisible by all of the numbers starting from 1 up to the value passed into your function.
 *
 * @param  { Number } ceiling This value will serve as your ceiling.
 * @return { Number }         Lowest Positive Number that is evenly divisible by all numbers
 *                            between 1 and `ceiling`
 */
module.exports = function( ceiling ) {
  // do work here
var toDiv =[];
for (var i = 1; i <= ceiling; i++) {
  toDiv.push(i);
}

console.log(toDiv);

var startNum = ceiling * (ceiling - 1);
console.log(startNum);

var answer;

function checker() {
  for (var k = 0; k < toDiv.length; k++){
    if (startNum % toDiv[k] !== 0){
      startNum++;
      return checker();
    }
  }
  console.log(startNum);
  return startNum;

}

checker();

};