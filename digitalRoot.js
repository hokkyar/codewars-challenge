// function digitalRoot(n) {
//   let length = n.toString().split('').length
//   do {
//     n = n.toString().split('').reduce((acc, curr) => parseInt(acc) + parseInt(curr))
//     length = n.toString().split('').length
//   } while (length > 1)
//   return n
// }

// function digitalRoot(n) {
//   while (n >= 10) {
//     n = String(n).split('').reduce((acc, curr) => acc + parseInt(curr), 0)
//   }
//   return n
// }

// BEST SOLUTION
function digitalRoot(n) {
  return (n - 1) % 9 + 1;
}

console.log(digitalRoot(16))
console.log(digitalRoot(456))
console.log(digitalRoot(942))
console.log(digitalRoot(132189))
console.log(digitalRoot(493193))