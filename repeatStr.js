// function repeatStr(n, s) {
//   let result = ''
//   for (let i = 0; i < n; i++) {
//     result = result + s
//   }
//   return result;
// }

const repeatStr = (n, s) => s.repeat(n)

console.log(repeatStr(2, "I"))
console.log(repeatStr(5, "hello"))
console.log(repeatStr(5, "#"))
console.log(repeatStr(3, "ha"))
console.log(repeatStr(3, "*"))