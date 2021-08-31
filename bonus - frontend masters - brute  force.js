const coins = [10, 6, 1]
let counter = 0

const makeChange = (amt) => {
  counter++
  console.log(`${counter}: calling makeChange(${amt})`)

  if (amt === 0) return 0
  let minCoins

  coins.forEach((coin) => {
    if (amt - coin >= 0) {
      let currMinCoins = makeChange(amt - coin)
      if (minCoins === undefined || currMinCoins < minCoins) {
        minCoins = currMinCoins
      }
    }
  })
  return minCoins + 1
}

console.log(makeChange(12))
