// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// P - an array
// R - an element of the array
// E - see console logs
// P - make a hashmap
//      return the key with a value > array.length/2

function majorityEl(nums) {
  const hash = {}
  let majEl = null

  for (const num of nums) {
    hash[num] = hash[num] + 1 || 1
  }

  for (const num in hash) {
    if (hash[num] > nums.length / 2) majEl = num
  }
  return majEl
}

// tricky but possibly less efficient way:
const majorityEl2 = (nums) => {
  const sorted = nums.sort()
  return sorted[Math.floor(nums.length / 2)]
}

// Leon's way:
function majorityEl3(arr) {
  let elem = {},
    count = 0,
    majElem = arr[0]

  for (const num of arr) {
    elem[num] = elem[num] + 1 || 1
  }

  for (const n in elem) {
    if (elem[n] > count) {
      count = elem[n]
      majElem = n
    }
  }
  return majElem
}

console.log(majorityEl([6, 5, 5]), 5)
console.log(majorityEl2([6, 5, 5]), 5)
console.log(majorityEl3([6, 5, 5]), 5)
console.log(majorityEl([1]), 1)
console.log(majorityEl2([1]), 1)
console.log(majorityEl3([1]), 1)

// console.log(majorityEl([3, 2, 3]), 3)
// console.log(majorityEl([2, 2, 1, 1, 1, 2, 2]), 2)
// console.log(majorityEl2([3, 2, 3]), 3)
// console.log(majorityEl2([2, 2, 1, 1, 1, 2, 2]), 2)
// console.log(majorityEl3([3, 2, 3]), 3)
// console.log(majorityEl3([2, 2, 1, 1, 1, 2, 2]), 2)
