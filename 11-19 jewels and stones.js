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

// P - two strings
// R - a number
// E - see console logs
// P - make an object with the individual values of stones
//      go through jewels and add the matching values

function countJewels(jewels, stones) {
  let stonesObj = {}
  let totalJewels = 0

  for (stone of stones) {
    stonesObj[stone] = stonesObj[stone] + 1 || 1
  }

  for (jewel of jewels) {
    if (stonesObj[jewel]) totalJewels += stonesObj[jewel]
  }

  return totalJewels
}

// Leon's method:
function countJewels2(jewels, stones) {
  let count = 0
  map = {}

  for (const jewel of jewels) {
    map[jewel] = true
  }
  for (const stone of stones) {
    if (map[stone]) {
      count++
    }
  }
  return count
}

console.log(countJewels('aA', 'aAAbbbb'), 3)
console.log(countJewels('z', 'ZZ'), 0)
console.log(countJewels2('aA', 'aAAbbbb'), 3)
console.log(countJewels2('z', 'ZZ'), 0)
