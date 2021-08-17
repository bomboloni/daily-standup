/* Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

*/

const magazine =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'

const ransom = (note) => {
  // create an object of word : num
  // loop through each word of the note to find it in the obejct. if it's there udate the value of the objects key. if it's not there return false
  // return true
}

console.log(ransome('sit ad est sint'), true)
console.log(ransome('sit ad est love'), false)
console.log(ransome('sit ad est sint in in'), true)
console.log(ransome('sit ad est sint in in in in'), false)
