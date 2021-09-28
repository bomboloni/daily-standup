// Please use recursion! We'll identify the base case and walk through a recursive solution together during standup! Solution in the hint (write it out on paper)

// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

// Test.assertEquals(mygcd(30,12),6)
// Test.assertEquals(mygcd(8,9),1)
// Test.assertEquals(mygcd(1,1),1)

//   return y == 0 ? x : mygcd(y, x % y)

const gcd = (n1, n2) => {
  return !n2 ? n1 : gcd(n2, n1 % n2)
}

console.log(gcd(30, 12), 6)
console.log(gcd(8, 9), 1)
console.log(gcd(1, 1), 1)

const gcd2 = (n1, n2) => {
  if (n2 === 0) {
    return n1
  }
  //   console.log(n1 % n2)
  return gcd2(n2, n1 % n2)
}

console.log(gcd2(45, 30), 6)
console.log(gcd2(8, 9), 1)
console.log(gcd2(1, 1), 1)
