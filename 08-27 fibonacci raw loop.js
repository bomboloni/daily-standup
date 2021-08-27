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

//No recursion  or memoization please, just give me a raw for loop for today!

const rawFib = (n) => {
  let fib = [0, 1]

  for (let i = 2; i < n + 1; i++) {
    fib.push(fib[i - 1] + fib[i - 2])
  }
  return fib[n]
}

console.log(rawFib(2), 1)
console.log(rawFib(3), 2)
console.log(rawFib(4), 3)
