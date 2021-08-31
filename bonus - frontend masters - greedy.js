// Write a function, makeChange, that returns an integer that represents the least number of coins that add up to an amount where the amount is always divisible by 5.

// coin values: 5, 10, 25

// input amount: 40 , output # of coins: 3 (25, 10, 5)

// input amount: 35, output # of coins: 2 (25, 10)

// this is broken:
// const greedy = (amt) => {
//   const coins = [25, 10, 5]
//   let result = 0

//   const coin = (n) => {
//     if (n === 0) {
//       return result
//     } else {
//       let c = coins[coins.findIndex((e) => n > e)]
//       result++
//       n = n - c
//       return coin(n)
//     }
//   }
//   return coin(amt)
// }
// console.log(greedy(0))
// console.log(greedy(40))
// console.log(greedy(35))

const change = (coins, amt) => {
  coins = coins.sort((a, b) => b - a)
  let result = 0
  let i = 0

  while (amt > 0) {
    if (coins[i] <= amt) {
      amt -= coins[i]
      result++
    } else {
      i++
    }
  }
  return result
}

console.log(change([25, 10, 5], 0), 0)
console.log(change([25, 5, 10], 40), 3)
console.log(change([25, 10, 5], 35), 2)

/*
Bianca from Frontend Masters cautions against the greedy approach because it can seem correct but can be hard to tell if it really is correct
*/
