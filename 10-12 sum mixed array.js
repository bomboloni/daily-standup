// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
// assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42);
// assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);

// const sumMix = (arr) => {
//   //   return arr.map((e) => e * 1).reduce((a, b) => a + b)
//   return arr.reduce((sum, curr) => sum + curr * 1, 0)
// }

const sumMix = (arr) => arr.reduce((sum, curr) => sum + +curr, 0) //reduce((s, e) => s + e * 1, 0)

console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42)

//  const sumMix=x=>x.reduce((a,b)=>+b+a,0)
