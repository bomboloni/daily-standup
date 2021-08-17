// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)!

const nr = (str) => {
  let x = str.split('')
  return [...x].map(x.pop, x).join('')
}

console.log(nr('hello'))

// another  solution:

const noRev = (str) => {
  let x = ''
  for (let char of str) {
    x = char + x
  }
  return x
}

console.log(noRev('hello'))
