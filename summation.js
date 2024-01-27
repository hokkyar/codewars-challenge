// var summation = function (num) {
//   let result = 0
//   for (let i = 1; i <= num; i++) {
//     result += i
//   }
//   return result
// }

const summation = (num) => (num * (num + 1)) / 2

console.log(summation(1))
console.log(summation(2))
console.log(summation(8))