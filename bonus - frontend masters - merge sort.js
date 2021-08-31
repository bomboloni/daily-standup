// const mergeSort = (arr) => {
//   if (arr.length === 1) return arr

//   const mid = Math.floor(arr.length / 2)
//   const arrL = arr.slice(0, mid)
//   const arrR = arr.slice(mid)
//   const sortedL = mergeSort(arrL)
//   const sortedR = mergeSort(arrR)

//   return merge(sortedL, sortedR)
// }

// const merge = (left, right) => {
//   let result = []
//   let iL = 0
//   let iR = 0

//   while (iL < left.length && iR < right.length) {
//     if (left[iL] < right[iR]) {
//       result.push(left[iL])
//       iL++
//     } else {
//       result.push(right[iR])
//       iR++
//     }
//   }
//   return result.concat(left.slice[iL]).concat(right.slice[iR])
// }

// console.log(mergeSort([9, 2, 5, 6, 4, 3, 7, 10, 1, 8]))
// console.log(mergeSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
// console.log(mergeSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))

//TASK: implement mergesort!

// Split the array into halves and merge them recursively
function mergeSort(arr) {
  if (arr.length === 1) {
    // return once we hit an array with a single item
    return arr
  }

  const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
  const left = arr.slice(0, middle) // items on the left side
  const right = arr.slice(middle) // items on the right side
  const sortedLeft = mergeSort(left)
  const sortedRight = mergeSort(right)
  return merge(sortedLeft, sortedRight)
}

// compare the arrays item by item and return the concatenated result
function merge(left, right) {
  let result = []
  let indexLeft = 0
  let indexRight = 0

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft])
      indexLeft++
    } else {
      result.push(right[indexRight])
      indexRight++
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3]
console.log(mergeSort(list)) // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]
