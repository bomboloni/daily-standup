/*  task 1 - write a recursive factorial method
    task 2  memoize it

start with 1
    1 * 2 = 2
    2 * 3 = 6
    6 * 4 = 24
    24 * 5 = 120
*/
// with a wrapper function

const fact = (num) => {
  let result = 1
  let i = 2

  const recurse = (i) => {
    if (i > num) {
      return result
    }
    result = i * result
    i++
    return recurse(i)
  }
  return recurse(i) // this is the same as return result
}

console.log(fact(5))

const betterFact = (num) => {
  if (num === 0) return 1
  //   console.log(`${num} * ${betterFact(num - 1)} = ${num * betterFact(num - 1)}`)
  return num * betterFact(num - 1)
}

console.log(betterFact(5))

// memoized

const memoize = (fn) => {
  let cache = {}
  return (...args) => {
    let n = args[0]
    if (n in cache) {
      //   console.log('Fetching from cache', n)
      return cache[n]
    } else {
      //   console.log('Calculating result', n)
      let result = fn(n)
      cache[n] = result
      return result
    }
  }
}

const factMemo = memoize((x) => {
  if (x === 0) {
    return 1
  } else {
    return x * factMemo(x - 1)
  }
})

console.log(factMemo(5))
