// function abbrevName(name) {
//   let result = `${name[0]}.`
//   for (let i = 1; i < name.length; i++) {
//     if (name[i] == ' ') {
//       result += name[i + 1]
//       break
//     }
//   }
//   return result.toUpperCase()
// }

const abbrevName = (name) => name.split(' ').map((el) => el[0]).join('.').toUpperCase()

console.log(abbrevName('Sam Harris'))
console.log(abbrevName('pattrick feeney'))