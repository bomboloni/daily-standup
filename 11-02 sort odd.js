// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
// sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])

// P - an array of numbers
// R - an array with the odd nums sorted and the evens in place
// E - see console logs
// P - create an array or sorted odds
//     map the original array testing elements for odd
//     replace the odd elements with elements in the odd array

// function sortOdd(arr) {
//   const isOdd = (n) => n % 2 !== 0
//   const oddArr = arr.filter((e) => isOdd(e))

//   return arr.map((e) => {
//     if (isOdd(e)) {
//       e = oddArr[oddArr.length - 1]
//       oddArr.pop()
//     }
//     return e
//   })
// }

function sortOdd(arr) {
  const odds = arr.filter((e) => e % 2).sort((a, b) => b - a)
  return arr.map((e) => (e % 2 ? odds.pop() : e))
}

console.log(sortOdd([5, 8, 6, 3, 4]), [3, 8, 6, 5, 4])
