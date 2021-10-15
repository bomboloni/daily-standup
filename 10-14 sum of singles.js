// You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// repeats([4,5,7,5,4,8]),15)
// repeats([9, 10, 19, 13, 19, 13]),19)
// repeats([16, 0, 11, 4, 8, 16, 0, 11]),12)
// repeats([5, 17, 18, 11, 13, 18, 11, 13]),22)
// repeats([5, 10, 19, 13, 10, 13]),24)

//[P]arameters: an array or numbers, will contain at least 1 number, and no  non-numbers
//[R]esult: a number that is the sum of the unique numbers
//[E]xample: [4,5,7,5,4,8] returns 15
//[P]suedo ?
// step 1: filter out numbers that appear more than once
// step 2: reduce the remaining numbers

// const repeats = (arr) => {
//   arrSingles = arr.filter((e) => arr.indexOf(e) === arr.lastIndexOf(e))
//   return arrSingles.reduce((a, c) => a + c, 0)
// }

const repeats = (arr) =>
  arr
    .filter((e) => arr.indexOf(e) === arr.lastIndexOf(e))
    .reduce((a, c) => a + c, 0)

console.log(repeats([4, 5, 7, 5, 4, 8]), 15)

// Hint: Filter the items where the index  equals the last index of and then reduce the sum
