// Given an array of items, reverse the order.

// No reverse method! Unless that is your brute force first...

const revArrTwo = (arr) => {
  for (let i = 0; i < arr.length / 2; i++) {
    const temp = arr[i]
    arr[i] = arr[arr.length - 1 - i]
    arr[arr.length - 1 - i] = temp
  }
  return arr
}
console.log(revArrTwo([1, 2, 3, 4, 5]), 'revArrTwo')

const shifty = (arr) => {
  let newArr = []
  for (let e of arr) {
    newArr.unshift(e)
  }
  return newArr
}
console.log(shifty([1, 2, 3, 4, 5]), 'shifty')

const revArr = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[arr.length - 1 - i]
  }
  return arr
}
console.log(revArr([1, 2, 3, 4, 5]), 'revArr')

// my codewars way, for reference
const rev = (arr) => [...arr].map(arr.pop, arr)
console.log(rev([1, 2, 3, 4, 5]), 'rev')
