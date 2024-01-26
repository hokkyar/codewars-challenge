// function smash(words) {
//   let result = words[0]
//   for (let i = 1; i < words.length; i++) {
//     result = result + " " + words[i]
//   }
//   return result ? result : ""
// }

// function smash(words) {
//   return words.join(' ')
// };

const smash = (words) => words.join(' ')

console.log(smash([]))