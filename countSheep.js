// var countSheep = function (num) {
//   let result = ""
//   for (let i = 1; i <= num; i++) {
//     result += i + " sheep..."
//   }
//   return result
// }

// const countSheep = (num) => [...Array(num)].map((_, i) => ++i + " sheep...").join('')

const countSheep = (num) => [...Array(num)].map((_, i) => `${++i} sheep...`).join('')

console.log(countSheep(0))
console.log(countSheep(1))
console.log(countSheep(2))
console.log(countSheep(3))