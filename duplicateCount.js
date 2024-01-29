// function duplicateCount(text) {
//   const duplicates = []
//   text = text.toLowerCase()
//   for (let i = 0; i < text.length; i++) {
//     let count = 0
//     for (let j = 0; j < text.length; j++) {
//       if (text[i] == text[j]) {
//         count++
//       }
//       if (count > 1) {
//         duplicates.push(text[i])
//         break
//       }
//     }
//   }
//   return duplicates.filter((val, i, self) => self.indexOf(val) === i).length
// }

const duplicateCount = (text) => new Set([...text.toLowerCase()].filter((el, _, self) => self.indexOf(el) !== self.lastIndexOf(el))).size

console.log(duplicateCount(""))
console.log(duplicateCount("abcde"))
console.log(duplicateCount("aabbcde"))
console.log(duplicateCount("aabBcde"))
console.log(duplicateCount("Indivisibility"))
console.log(duplicateCount("Indivisibilities"))