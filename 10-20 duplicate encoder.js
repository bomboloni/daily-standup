// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

function encode(str) {
  let x = str.toLowerCase()

  return x
    .split('')
    .map((e) => (x.indexOf(e) === x.lastIndexOf(e) ? '(' : ')'))
    .join('')
}

//  I was failing when I tried this as a one-liner because map() was checking against the original str, not the toLowerCase() version. What would have worked would be using the array parameter within map(). Map can take up to three parameters: (element, index, array). Array would have referred back to what I had created when I split() str

console.log(encode('nPP(HP@JPPPPwPa'), '())(()(())))()(')
console.log(encode('Success'), ')())())')
console.log(encode('din'), '(((')
console.log(encode('rEcede'), '()()()')
console.log(encode('(( @'), '))((')
