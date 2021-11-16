// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.

// P - a number
// R - unclear. an array? we will assume an array
// E - see console log
// P - loop through and use modulus

// function fizzBuzz(n) {
//     const result = []
//     for (let i = 1; i <= n; i++) {
//       let str = ''
//       if (i % 2 === 0) str += 'Fizz'
//       if (i % 3 === 0) str += 'Buzz'
//       if (!str.length) result.push(i)
//       else result.push(str)
//     }
//     return result
//   }

function fizzBuzz(n) {
  const result = []
  for (let i = 1; i <= n; i++) {
    let str = ''
    if (!(i % 2)) str += 'Fizz'
    if (!(i % 3)) str += 'Buzz'
    if (!str.length) result.push(i)
    else result.push(str)
  }
  return result
}

// let's console log the result instead

// function fb(n) {
//   for (let i = 1; i <= n; i++) {
//     let str = ''
//     if (!(i % 2)) str += 'Fizz'
//     if (!(i % 3)) str += 'Buzz'
//     str.length ? console.log(str) : console.log(i)
//   }
// }

const fb = (n) =>
  Array(n)
    .fill()
    .map((e, i) => {
      i++
      let str = ''
      if (!(i % 2)) str += 'Fizz'
      if (!(i % 3)) str += 'Buzz'
      console.log(str ? str : i)
    })

fb(6)

// prettier-ignore
// console.log(fizzBuzz(10), [1, 'Fizz', 'Buzz', 'Fizz', 5, 'FizzBuzz', 7, 'Fizz', 'Buzz', 'Fizz'])
// prettier-ignore
// console.log(fizzBuzz(6), [1, 'Fizz', 'Buzz', 'Fizz', 5, 'FizzBuzz'])
