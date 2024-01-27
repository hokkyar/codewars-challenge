// function countSheeps(sheep) {
//   let total = 0
//   for (let i = 0; i < sheep.length; i++) {
//     if (sheep[i]) {
//       total++
//     }
//   }
//   return total
// }

// const countSheeps = (sheep) => sheep.filter((val) => val).length

const countSheeps = (sheep) => sheep.filter(Boolean).length

console.log(countSheeps([]))
console.log(countSheeps([undefined]))
console.log(countSheeps([null]))
console.log(countSheeps([false]))
console.log(countSheeps([true]))
console.log(countSheeps([undefined, null, false, true]))
console.log(countSheeps([undefined, null, false, true, true, false, null, undefined]))
console.log(countSheeps([true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true]))