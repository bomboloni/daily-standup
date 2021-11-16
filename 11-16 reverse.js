// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)!

// P - a string of chars
// R - the string reversed
// E - hello -> olleh
// R - arrayify, then do a  pop/push thing

function rev1(str) {
  const x = str.split('')
  const result = []

  for (let i = 0; i < str.length; i++) {
    result.push(x.pop())
  }
  return result.join('')
}

function rev2(str) {
  const arr = str.split('')
  let result = ''

  while (arr.length) {
    result += arr.pop()
  }
  return result
}

function rev3(str) {
  return [...str].map((_, i, arr) => arr[arr.length - 1 - i]).join('')
}

const rev4 = (str) => [...str].map((_, i, r) => r[r.length - 1 - i]).join('')

// this does not work yet
// const reverse = (str) => [...str].map(str.pop, str)

// codewars - brevity is the soul of wit, 3 kyu
// reverse=a=>[...a].map(a.pop,a)

console.log(rev1('hello'), '| olleh')
console.log(rev2('hello'), '| olleh')
console.log(rev3('hello'), '| olleh')
console.log(rev4('hello'), '| olleh')
// console.log(reverse('hello'), '| olleh')
