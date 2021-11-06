// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

// P - a string of words
// R - a string of words
// E - see console logs
// P -split into an array
//    filter for != [i+1]
//    join

function removeDupes(str) {
  return str
    .split(' ')
    .filter((e, i, a) => e !== a[i + 1])
    .join(' ')
}

console.log(
  removeDupes(
    'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
  ),
  'alpha beta gamma delta alpha beta gamma delta'
)
