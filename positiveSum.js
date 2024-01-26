// function positiveSum(arr) {
//   let result = 0
//   for (let i = 0; i < arr.length; i++) {
//     (arr[i] < 0) ? result : result += arr[i]
//   }
//   return result
// }

const positiveSum = (arr) => arr.reduce((a, b) => (b < 0) ? a : a + b, 0)

console.log(positiveSum([1, 2, 3, 4, 5]))
console.log(positiveSum([1, -2, 3, 4, 5]))
console.log(positiveSum([]))
console.log(positiveSum([-1, -2, -3, -4, -5]))
console.log(positiveSum([-1, 2, 3, 4, -5]))