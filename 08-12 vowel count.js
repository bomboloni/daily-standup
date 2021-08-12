// Given a string of words or phrases, count the number of vowels.

// No Regex! Unless that is your brute force...

const vowelCount = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  let count = 0

  for (let char of str) {
    if (vowels.includes(char)) count++
  }
  return count
}
console.log(vowelCount('hello!'))

// const vowels = (str) => {
//   const v = ['a', 'e', 'i', 'o', 'u']
//   let count = 0

//   str.split('').map((e) => {
//     if (v.includes(e)) {
//       count++
//     }
//   })
//   return count
// }
// console.log(vowels('hello!'))
