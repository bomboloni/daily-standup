// Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

// const magazine =
//  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

// P - two strings
// R - true or false
// E - see console logs
// P - make two has maps and compare the values
//      I am choosing to discount spaces, commas, and periods, but that is easily adjusted if needed

const magazine =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'

// make array of words; strip ',' & '.'
const makeHash = (x) => {
  const tempHash = {}

  x = x.split(' ').map((e) => {
    if (e.endsWith(',') || e.endsWith('.')) e.slice(0, -1)
    return e
  })

  for (char of x) {
    tempHash[char] = tempHash[char] + 1 || 1
  }
  return tempHash
}

function ransomNote(str, mag) {
  let result = true
  const magHash = makeHash(mag)
  const noteHash = makeHash(str)

  for (word in noteHash) {
    if (noteHash[word] > magHash[word] || !magHash[word]) {
      result = false
    }
  }
  return result
}

console.log(ransomNote('sit ad est sint', magazine), true)
console.log(ransomNote('sit ad est love', magazine), false)
console.log(ransomNote('sit ad est sint in in', magazine), true)
console.log(ransomNote('sit ad est sint in in in in', magazine), false)
