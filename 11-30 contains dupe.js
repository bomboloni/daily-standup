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

// P - an array of numbers
// R - true or false
// E - see console logs
// P - loop through to create a hash
//      if an element exists in the hash return false
//      else return true

function containsDupe(nums) {
  const hash = {}

  for (num of nums) {
    if (hash[num]) return true
    hash[num] = 1
  }
  return false
}

// I forgot the best answer:

const containsDupe2 = (nums) => {
  const set = new Set(nums)
  return set.size !== nums.length
}

console.log(containsDupe([1, 2, 3, 1]), true)
console.log(containsDupe([1, 2, 3, 4]), false)
console.log(containsDupe([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true)

console.log(containsDupe2([1, 2, 3, 1]), true)
console.log(containsDupe2([1, 2, 3, 4]), false)
console.log(containsDupe2([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true)
