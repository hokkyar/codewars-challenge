// function moveZeros(arr) {
//   const countZero = arr.filter((el) => el === 0).length
//   arr = arr.filter((el) => el !== 0)
//   for (let i = 0; i < countZero; i++) {
//     arr.push(0)
//   }
//   return arr
// }

// another solution
const moveZeros = (arr) => arr.sort((a, b) => (a === 0) - (b === 0))

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]))
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]))