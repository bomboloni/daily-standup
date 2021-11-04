// Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

// A few examples:

// ['u', 'y'] =>  ['u', 'y'] // average length is 1
// ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
// ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
// If the average length is not an integer, use Math.round().
// The input array's length > 1
// P - an array of  2 or more strings consisting of a letter repeated one or more times
// R - an array of strings, each string the length of the average of the input array's strings (round up for  the average)
// E - see console logs
// P - map input array to create an  array  of str.lengths, then reduce and find the average
//     map again, grabbing the  character  and repeating it the average's time
//     should I be  creating  an object?

// function averageify(arr) {
//   average = Math.round(
//     arr.map((e) => e.length).reduce((a, b) => a + b) / arr.length
//   )
//   return arr.map((e) => e[0].repeat(average))
// }

// as a one-liner
// const averageify = (arr) =>
//   arr.map((e) => e[0].repeat(Math.round(arr.join('').length / arr.length)))

// with a constfor readability, and as a function for practice
function averageify(arr) {
  const average = Math.round(arr.join('').length / arr.length)
  return arr.map((e) => e[0].repeat(average))
}

// console.log(averageify(['u', 'y']), ['u', 'y'] )
console.log(averageify(['aa', 'bbb', 'cccc']), ['aaa', 'bbb', 'ccc'])
// console.log(averageify(['aa', 'bb', 'ddd', 'eee']), ['aaa', 'bbb', 'ddd', 'eee'])
