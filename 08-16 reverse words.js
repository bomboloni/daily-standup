// Given a phrase, reverse the order of the characters of each word.

// describe("Reverse Words", () => {
//  it("Should reverse words", () => {
//   assert.equal(reverseWords("I love JavaScript!"), "I evol !tpircSavaJ");
//  });
// });

// No Reverse Method! Unless that is your brute force...

const rw = (str) => {
  return str
    .split(' ')
    .map((e) => {
      let x = ''
      for (let char of e) {
        x = char + x
      }
      return x
    })
    .join(' ')
}

console.log(rw('I love javascript'))

// leon's method:

const revWds = (str) => {
  const result = []
  str.split(' ').forEach((w) => {
    let current = ''
    for (let i = w.length - 1; i >= 0; i--) {
      current += w[i]
    }
    result.push(current)
  })
  return result.join(' ')
}

console.log(revWds('I love javascript'))
