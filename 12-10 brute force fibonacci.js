// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

// Example 1:

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

// P - a number
// R - a number
// E - see console log
// P - make an array, map and reduce
//  ^^ nooooo, just make a loop

function bruteFib(n) {
  let prevFib = 0
  let fib = 1

  if (n === 0) return prevFib
  if (n === 1) return fib

  for (i = 2; i <= n; i++) {
    let temp = fib
    fib += prevFib
    prevFib = temp
  }
  return fib
}

// Leon's hint method:
function bruteFib2(n) {
  let fibArr = [0, 1]

  for (i = 2; i <= n; i++) {
    fibArr.push(fibArr[i - 1] + fibArr[i - 2])
  }
  return fibArr[n]
}
// (Leon didn't push(), he used fibArr[n] = etc.)

console.log(bruteFib(2), 1)
console.log(bruteFib(3), 2)
console.log(bruteFib(4), 3)

console.log(bruteFib2(2), 1)
console.log(bruteFib2(3), 2)
console.log(bruteFib2(4), 3)
