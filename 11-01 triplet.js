// You need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers.

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

// P - an array of three number
// R - find the middle number and return its index
// E - see console logs
// P - create a sorted array
//     search for the index of the middle element of the sorted array within the original array

function gimmie(arr) {
  return arr.indexOf([...arr].sort((a, b) => a - b)[1])
}

// my original codewars version:

// const gimmie = (inputArray) =>
//   inputArray.findIndex(
//     (e) => e !== Math.min(...inputArray) && e !== Math.max(...inputArray)
//   )

console.log(gimmie([2, 3, 1]), 0)
console.log(gimmie([5, 10, 14]), 1)
