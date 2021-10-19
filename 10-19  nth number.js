/*
Task

Given an array/list [] of integers , Find the Nth smallest element in this array of integers

Notes

Array/list size is at least 3 .

Array/list's numbers could be a mixture of positives , negatives and zeros .

Repetition in array/list's numbers could occur , so don't Remove Duplications .

Input >> Output Examples

nthSmallest({3,1,2} ,2) ==> return (2) 
Explanation:

Since the passed number is 2 , Then * the second smallest element in this array/list is 2*
*/

// function nthSmallest(arr, pos) {
//   return arr.sort((a, b) => a - b)[pos - 1]
// }

const nthSmallest = (arr, pos) => arr.sort((a, b) => a - b)[pos - 1]

console.log(nthSmallest([3, 1, 2], 2), 2)
console.log(nthSmallest([15, 20, 7, 10, 4, 3], 3), 7)
console.log(nthSmallest([2, 169, 13, -5, 0, -1], 4), 2)
console.log(nthSmallest([177, 225, 243, -169, -12, -5, 2, 92], 5), 92)

/* Examples to learn from:

*/
