// Your job is to figure out the index of which vowel is missing from a given string:

// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.
// Notes: There is no need for string validation and every sentence given will contain all vowles but one. Also, you won't need to worry about capitals.

// Examples
// "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
// "Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"

// P - a string that is sentence containing all the vowels
// R - the index of the missing vowel
// E - see console logs
// P - create an array of the vowels
//      findIndexOf === -1

// function missingIndex(str) {
//   const vowels = ['a', 'e', 'i', 'o', 'u']
//   const missing = vowels.filter((e) => str.indexOf(e) === -1).join('')
//   return vowels.indexOf(missing)
// }

function missingIndex(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  return vowels.indexOf(vowels.filter((e) => str.indexOf(e) === -1).join(''))
}

console.log(missingIndex('John Doe hs seven red pples under his bsket'), 0)
console.log(
  missingIndex('Bb Smith sent us six neatly arranged range bicycles'),
  3
)
