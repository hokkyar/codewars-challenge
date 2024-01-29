// function arrayDiff(a, b) {
//   return a.filter((el) => !b.includes(el))
// }

const arrayDiff = (a, b) => a.filter((el) => !b.includes(el))

console.log(arrayDiff([1, 2], [1]))
console.log(arrayDiff([1, 2, 2], [1]))
console.log(arrayDiff([1, 2, 2], [2]))
console.log(arrayDiff([], [1, 2]))
console.log(arrayDiff([1, 2, 3], [1, 2]))