// Implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// arrayDiff([], [4,5]), [], "a was [], b was [4,5]"

// arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]"

// arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []"

// P - two arrays
// R - an array
// E - see console logs
// P - filter  through the fist array to see if the element is in the second array
//      return the result
//      make sure if there were no matching items that an empty array is returned

// function diff(arr1, arr2) {
//   return arr1.filter((e) => !arr2.includes(e))
// }

// Leon's more efficient version:

function diff(arr1, arr2) {
  let set = new Set(arr2)
  return arr1.filter((e) => !set.has(e))
}

console.log(diff([1, 2, 2, 2, 3], [2]), [1, 3])
// console.log(diff())
// console.log(diff())
