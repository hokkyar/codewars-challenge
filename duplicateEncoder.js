// function duplicateEncode(word) {
//   let result = ''
//   const wordCount = {}
//   word = word.toLowerCase()
//   for (let i = 0; i < word.length; i++) {
//     wordCount[word[i]] = 0
//     for (let j = 0; j < word.length; j++) {
//       if (word[i] == word[j]) {
//         wordCount[word[i]]++
//       }
//     }
//     (wordCount[word[i]] == 1) ? result += '(' : result += ')'
//   }
//   return result
// }

// function duplicateEncode(word) {
//   const result = []
//   word = word.toLowerCase()
//   for (let i = 0; i < word.length; i++) {
//     result.push(word.split(word[i]).length - 1 === 1 ? '(' : ')')
//   }
//   return result.join('')
// }

// another solution
function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split('')
    .map((a, _, w) => w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')')
    .join('')
}


console.log(duplicateEncode('din'))
console.log(duplicateEncode('recede'))
console.log(duplicateEncode('Success'))
console.log(duplicateEncode('(( @'))