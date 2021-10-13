// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// getAverage([2,2,2,2]),2)
// getAverage([1,2,3,4,5,]),3);
// getAverage([1,1,1,1,1,1,1,2]),1)

//Hint: Reduce the sum and divide by the length to get the average and then round down

const getAverage = (arr) =>
  Math.floor(arr.reduce((a, c) => a + c, 0) / arr.length)

console.log(getAverage([1, 2, 3, 4, 5]), 3)
