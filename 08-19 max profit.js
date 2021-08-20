// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Input: prices = [7,1,5,3,6,4]
// Output: 5

// Input: prices = [7,6,4,3,1]
// Output: 0

// my first version:
const mp = (prices) => {
  const profit = [0]

  for (price of prices) {
    p = prices.shift()
    diff = Math.max(...prices) - p

    if (diff > 0) {
      profit.push(diff)
    }
  }
  return Math.max(...profit)
}

console.log(mp([7, 1, 5, 3, 6, 4]), 5)
console.log(mp([7, 6, 4, 3, 1]), 0)

// version based on hint
const maxP = (prices) => {
  let min = Math.max(...prices)
  let max = 0

  for (price of prices) {
    if (price < min) {
      min = price
    } else {
      price - min > max ? (max = price - min) : (max = max)
    }
  }
  return max
}

console.log(maxP([7, 1, 5, 3, 6, 4]), 5)
console.log(maxP([7, 6, 4, 3, 1]), 0)

// Leon's version
const maxProfit = (prices) => {
  let min = Number.POSITIVE_INFINITY
  let max = 0

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i]
    } else if (prices[i] - min > max) {
      max = prices[i] - min
    }
  }
  return max
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]), 5)
console.log(maxProfit([7, 6, 4, 3, 1]), 0)
