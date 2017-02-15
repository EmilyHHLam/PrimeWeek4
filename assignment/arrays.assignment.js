/**
Array Review
**/
console.log('CREATE A ARRAY');
function createArray() {
  // create an array with 6 elements (numbers and strings only)
  // Write code below
    myArray  = ['Charlie', 'labradoodle', 1, 'male','cream-colored', true ];
  // return this array
  return myArray;
}
createArray();
console.log(myArray);

console.log("----------------------------");
console.log('CONCATENATE THE ARRAY TO BE A STRING');

function loopArray(array) {
  // used below
  var conString = '';
  // Write code here: Concatentate all of the values in array together using a loop
      for(var i =0; i < array.length; i++) {
        conString = conString + ' ' + array[i];
      }

  // return concatentated values
  return conString;
}
loopArray(myArray);
console.log(loopArray(myArray));

console.log("----------------------------");
console.log('REVERSE ARRAY');

function arrayReverser(arrayParam) {
  // Copy items from arrayParam to a new array called reversedArray, reversing the order of elements
  // Last element on arrayParam should become the first in reversedArray
  // Do not use Array.reverse()!
  var reversedArray = [];
  // Write the code here
  for (var i = arrayParam.length -1; i>-1; i--) {
    reversedArray.push(arrayParam[i]);
  }

  // return our reversed array
  return reversedArray;
}

// call and console log the return for loopArray and arrayReverser

arrayReverser(myArray);
console.log(arrayReverser(myArray));
console.log("----------------------------");
//-- DON'T TOUCH CODE BELOW --
module.exports = {
  createArray: createArray,
  loopArray: loopArray,
  arrayReverser: arrayReverser
};
