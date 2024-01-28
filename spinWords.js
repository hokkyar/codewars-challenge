// function spinWords(string) {
//   string = string.split(' ')
//   for (let i = 0; i < string.length; i++) {
//     if (string[i].length >= 5) {
//       string[i] = string[i].split('').reverse().join('')
//     }
//   }
//   return string.join(' ')
// }

const spinWords = (string) => string.split(' ')
  .map((el) => (el.length >= 5) ? el.split('').reverse().join('') : el).join(' ')

console.log(spinWords("Welcome"))
console.log(spinWords("Hey fellow warriors"))
console.log(spinWords("This is a test"))
console.log(spinWords("This is another test"))
console.log(spinWords("You are almost to the last test"))
console.log(spinWords("Just kidding there is still one more"))
console.log(spinWords("Seriously this is the last one"))