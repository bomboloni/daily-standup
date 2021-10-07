// Create a function that takes in a word and returns the word with the first letter capitalized.

// Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

// Hint: Remember how we grabbed individual letters from the string in yesterday's problem. Combine that with modifying the first to be upper case.

const capitalizeWord = (word) => word[0].toUpperCase() + word.slice(1)

console.log(capitalizeWord('word'), 'Word')

//   arr = word.split('')
//   arr[0].toUpperCase
//   return arr.join('')
