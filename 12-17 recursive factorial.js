// Factorial

// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example,

// 5! = 5 * 4 * 3 * 2 * 1 = 120.

// The value of 0! is 1.

// #Your task

// You have to create the function factorial that receives n and returns n!. You have to use recursion.

// P - a number
// R - a number
// E - see console logs
// P - test for 0
//      base case: n = 1
//      initialize a result to 1 and make a loop that *=

function fact(n) {
  if (n === 0) return 1

  return n * fact(n - 1)
}

// Leon's solution:

function fact2(n) {
  return n < 2 ? 1 : n * fact2(n - 1)
}

// just for fun

const fact3 = (n) => (n < 2 ? 1 : n * fact3(n - 1))

console.log(fact(0), 1)
console.log(fact(5), 120)
console.log(fact2(0), 1)
console.log(fact2(5), 120)
console.log(fact3(0), 1)
console.log(fact3(5), 120)
