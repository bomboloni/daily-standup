// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

const majority = (arr) => {
  let elements = {}
  let target = arr.length / 2
  let result

  for (el of arr) {
    elements[el] = elements[el] + 1 || 1
    if (elements[el] > target) {
      return (result = el)
    }
  }
  return result
}

console.log(majority([3, 2, 3]), 3)
console.log(majority([2, 2, 1, 1, 1, 2, 2]), 2)

// other solutions that I didn't write:
// this one returns the element that appears the most even if it's not a majority
function majorityElement(nums) {
  let obj = {}
  nums.forEach((n) => {
    if (n in obj) obj[n]++
    else obj[n] = 0
  })
  return Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b))
}

console.log(majorityElement([3, 2, 3]), 3)
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]), 2)

// this on solves the problem correctly
function majElement(nums) {
  let obj = {}

  nums.forEach((n) => {
    n in obj ? obj[n]++ : (obj[n] = 1)
  })

  return Object.keys(obj).filter((key) => obj[key] > nums.length / 2 && key)
}

console.log(majElement([3, 2, 3]), 3)
console.log(majElement([2, 2, 1, 1, 1, 2, 2]), 2)
