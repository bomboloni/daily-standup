// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0

// Constraints:

// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.

// could also filter

// brute force method
const amountJewels = (jewels, stones) => {
  let count = 0
  jewels = jewels.split('')

  stones.split('').map((e) => {
    if (jewels.includes(e)) {
      count++
    }
  })
  return count
}

console.log(amountJewels('aA', 'aAAbbbb'), 3)
console.log(amountJewels('z', 'ZZ'), 0)
console.log(amountJewels('ebd', 'bbb'), 3)

const amountJewels2 = (jewels, stones) => {
  const hash = {}
  let count = 0

  for (stone of stones) {
    hash[stone] = hash[stone] + 1 || 1
  }

  for (jewel of jewels) {
    if (hash[jewel]) {
      count += hash[jewel]
    }
  }

  return count ? count : 0
}

console.log(amountJewels2('aA', 'aAAbbbb'), 3)
console.log(amountJewels2('z', 'ZZ'), 0)
console.log(amountJewels2('ebd', 'bbb'), 3)
