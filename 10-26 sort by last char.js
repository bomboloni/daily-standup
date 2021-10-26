// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

// last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
// last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
// last('take me to semynak'), ['take', 'me', 'semynak', 'to']

// P - it will take in a string
// R - will return an array
// E - see console logs
// P - split the string into an array of  words
//      sort based on the last element of the array
//      make sure it maintains word order in the event of a tie

// function sortLast(str) {
//   return str
//     .split(' ')
//     .sort((a, b) => (a[a.length - 1] < b[b.length - 1] ? -1 : 1))
// }

const sortLast = (str) =>
  str.split(' ').sort((a, b) => (a[a.length - 1] < b[b.length - 1] ? -1 : 1))

console.log(sortLast('man i need a taxi up to ubud')) //, ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up'])
console.log(sortLast('what time are we climbing up the volcano')) //, ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what',])
console.log(sortLast('take me to semynak')) //, ['take', 'me', 'semynak', 'to'])
