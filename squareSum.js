// function squareSum(numbers) {
//   let result = 0
//   for (let i = 0; i < numbers.length; i++) {
//     result += numbers[i] * numbers[i]
//   }
//   return result
// }

const squareSum = (numbers) => numbers.reduce((acc, res) => acc + Math.pow(res, 2), 0)

console.log(squareSum([1, 2]))
console.log(squareSum([0, 3, 4, 5]))
console.log(squareSum([]))