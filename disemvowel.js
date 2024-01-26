// function disemvowel(str) {
//   const vowels = ['a', 'i', 'u', 'e', 'o', 'A', 'I', 'U', 'E', 'O']
//   let result = ''
//   for (let i = 0; i < str.length; i++) {
//     if (!vowels.includes(str[i])) {
//       result += str[i]
//     }
//   }
//   return result;
// }

const disemvowel = (str) => str.split('').filter((x) => !'aiueoAIUEO'.includes(x)).join('')

console.log(disemvowel(("This website is for losers LOL!")))
console.log(disemvowel(("No offense but,\nYour writing is among the worst I've ever read")))
console.log(disemvowel(("What are you, a communist?")))