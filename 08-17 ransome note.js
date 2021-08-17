/* Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

*/

const magazine =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'

const ransom = (note, mag) => {
  const regex = /[^a-z0-9\s']/g

  // creates an object of word : num, filters out junk
  const process = (str) => {
    const obj = {}
    const arr = str.toLowerCase().replace(regex, '').trim().split(' ')
    for (word of arr) {
      obj[word] = obj[word] + 1 || 1
    }
    return obj
  }

  const noteWords = process(note)
  const magWords = process(mag)
  const noteArr = Object.keys(noteWords)
  let result = true

  for (word of noteArr) {
    if (noteWords[word] <= magWords[word] === false) {
      result = false
    }
  }
  return result
}

console.log(ransom('sit ad est sint', magazine), true)
console.log(ransom('sit ad est love', magazine), false)
console.log(ransom('sit ad est sint in in', magazine), true)
console.log(ransom('sit ad est sint in in in in', magazine), false)
