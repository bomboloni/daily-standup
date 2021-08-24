// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// const dupes = (nums) => {
//   const hash = {}

//   for (num of nums) {
//     if (hash[num]) {
//       return true
//     } else {
//       hash[num] = 1
//     }
//   }
//   return false
// }

const dupes = (nums) => {
  const hash = {}
  result = false

  for (num of nums) {
    hash[num] ? (result = true) : (hash[num] = 1)
  }
  return result
}

console.log(dupes([1, 2, 3, 1]), true)
console.log(dupes([1, 2, 3, 4]), false)
console.log(dupes([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true)
