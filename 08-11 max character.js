// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// No String or Array Methods (well brute force it first, but then no methods)!

const maxChar = (str) => {
  const chars = {}

  for (let c of str) {
    chars[c] = chars[c] + 1 || 1
  }
  console.log(chars)

  let total = 0
  let max = null

  for (let c in chars) {
    if (chars[c] > total) {
      total = chars[c]
      max = c
    }
  }
  return max
}

console.log(maxChar('Hello World!'), 'l')
