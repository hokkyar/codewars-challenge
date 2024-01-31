// function persistence(num) {
//   let length = String(num).split('').length
//   let result = num
//   let counter = 0
//   while (length != 1) {
//     result = String(result).split('').reduce((a, b) => parseInt(a) * parseInt(b))
//     length = String(result).split('').length
//     counter++
//   }
//   return counter
// }

function persistence(num) {
  let counter = 0
  while (num >= 10) {
    num = String(num).split('').reduce((a, b) => a * b)
    counter++
  }
  return counter
}

console.log(persistence(4))
console.log(persistence(39))
console.log(persistence(25))
console.log(persistence(999))