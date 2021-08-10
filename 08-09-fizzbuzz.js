// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.

// Normally I would have pushed the results into an array, but because of  how the instructions were written I console logged from the  loop and through in my '' cheat

function fb(n) {
  for (i = 1; i <= n; i++) {
    let x = ''
    if (!(i % 2)) x += 'Fizz'
    if (!(i % 3)) x += 'Buzz'
    if (!x.length) x = i
    console.log(x)
  }
  return ''
}

console.log(fb(7))
