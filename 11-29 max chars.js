// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// No String or Array Methods (well brute force it first, but then no methods)!

// P - a string
// R - a char as string
// E - see console log
// P - make a hash map
//      make a counter
//      let max = '
//      check current value of the hash against the counter
//      update max when conditions are met
//      return max

// the instruction don't say anything about being case-insensitive or ignoring spaces or other characters. We could obviously process the string before looping through, or set up an if statement within the loop, if any of those conditions are desired

// everything in one loop:
// function maxChar(str) {
//   let count = 0
//   let max = ''
//   let hash = {}

//   for (char of str) {
//     hash[char] = hash[char] + 1 || 1

//     if (hash[char] > count) {
//       count = hash[char]
//       max = char
//     }
//   }
//   return max
// }

// letting the if statement run through the hashmap once instead of on each char

function maxChar(str) {
  let count = 0
  let max = ''
  const hash = {}

  for (char of str) {
    hash[char] = hash[char] + 1 || 1
  }

  for (char in hash) {
    if (hash[char] > count) {
      count = hash[char]
      max = char
    }
  }
  return max
}

console.log(maxChar('Should return max character'), 'r')
console.log(maxChar('Hello World!'), 'l')
