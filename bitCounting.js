// var countBits = function (n) {
//   return n.toString(2).split('').filter((el) => el == '1').length
// };

// const countBits = (n) => n.toString(2).split('').filter((el) => el == '1').length

// another solution
const countBits = (n) => n.toString(2).split('0').join('').length

console.log(countBits(1234))
console.log(countBits(4567))