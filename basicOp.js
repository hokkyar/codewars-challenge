// function basicOp(operation, value1, value2) {
//   let result = 0
//   switch (operation) {
//     case "+":
//       result = value1 + value2
//       break;
//     case "-":
//       result = value1 - value2
//       break;
//     case "*":
//       result = value1 * value2
//       break;
//     case "/":
//       result = value1 / value2
//       break;
//   }
//   return result;
// }

const basicOp = (operation, value1, value2) => eval(`${value1} ${operation} ${value2}`)

console.log(basicOp("+", 4, 7))
console.log(basicOp("-", 15, 18))
console.log(basicOp("*", 5, 5))
console.log(basicOp("/", 49, 7))