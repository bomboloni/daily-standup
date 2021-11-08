// You will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
// dup(["kelless","keenness"]) = ["keles","kenes"].
// Strings will be lowercase only, no spaces

// dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo'])
// dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese'])
// dup(["kelless","keenness"]), ['keles','kenes'])

// P - an array of strings  consisting  of groups of letters
// R - an array of strings with consecutive duplicate letters removed
// E - see console logs
// P - map
//      words into strings
//      filter

function dup(arr) {
  return arr.map((word) =>
    word
      .split('')
      .filter((e, i, r) => e !== r[i - 1])
      .join('')
  )
}

console.log(dup(['abracadabra', 'allottee', 'assessee']), [
  'abracadabra',
  'alote',
  'asese',
])
