// function removeChar(str) {
//   let result = ""
//   for (let i = 1; i < str.length - 1; i++) {
//     result += str[i]
//   }
//   return result
// };

const removeChar = (str) => str.split('').filter((_, i) => i != 0 && i != str.length - 1).join('')

console.log(removeChar('eloquent'))
console.log(removeChar('country'))