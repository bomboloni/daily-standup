// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

// describe("Two Sum", () => {
//  it("Should implement two sum", () => {
//   assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
//  });
// });

// this is the more efficient version:
const ts = (arr, n) => {
  const pairs = []
  const store = {}

  for (let part1 of arr) {
    const part2 = n - part1

    if (!store[part2]) {
      store[part1] = 1
    } else {
      pairs.push([part1, part2])
    }
  }
  return pairs
}
// prettier-ignore
console.log(ts([1, 2, 2, 3, 4], 4), 'answer', [[2, 2],[3, 1],])

// this is the simple, but less efficient, way
const twoSum = (arr, n) => {
  let result = []
  for (i = 0; i < arr.length; i++) {
    for (x = i + 1; x < arr.length; x++) {
      if (arr[i] + arr[x] === n) result.push([arr[i], arr[x]])
    }
  }
  return result
}

// prettier-ignore
console.log(twoSum([1, 2, 2, 3, 4], 4), 'answer',[[2, 2],[3, 1],])
