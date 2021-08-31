//TASK: Implement bubblesort!

const swap = (arr, i, j) => {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
// straight to anki this goes!
const bubSort = (arr) => {
  let swapped

  do {
    swapped = false
    for (i = 0; i < arr.length; i++) {
      if (arr[i] && arr[i + 1] && arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1)
        swapped = true
      }
    }
  } while (swapped)

  return arr
}

console.log(bubSort([9, 2, 5, 6, 4, 3, 7, 10, 1, 8]))
console.log(bubSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(bubSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
