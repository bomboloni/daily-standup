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
// P - initialized a memo array
//      set the concluding conditions
//      loop through recursively, checking the memo array

function memoFib(n) {
  let memo = [0, 1]

  const fib = (n) => {
    let result

    if (n < 2) {
      result = memo[n]
    } else {
      result = fib(n - 2) + fib(n - 1)
      memo[n] = result
    }
    return result
  }

  return fib(n)
}

// Leon's version:
const cache = {}
function memofib2(n) {
  if (n <= 1) {
    return n
  } else if (cache[n]) {
    return cache[n]
  } else {
    let result = memofib2(n - 1) + memofib2(n - 2)
    cache[n] = result
    return result
  }
}

// console.log(memoFib(1), 1)
// console.log(memoFib(2), 1)
// console.log(memoFib(3), 2)
// console.log(memoFib(4), 3)
console.log(memoFib(5))
console.log(memoFib2(5))
