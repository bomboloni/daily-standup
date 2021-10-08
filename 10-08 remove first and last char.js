// // Another warmup problem! Please focus on PREP!

// create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// Ex.
// 'eloquent' => 'loquen'
// 'country' => 'ountr'

const removeFirstAndLast = (str) => str.slice(1, -1)

console.log(removeFirstAndLast('eloquent'), 'loquen')
