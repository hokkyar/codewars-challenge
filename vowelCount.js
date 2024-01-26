// function getCount(str) {
//   const vowel = ['a', 'i', 'u', 'e', 'o']
//   let count = 0
//   for (let i = 0; i < str.length; i++) {
//     if (vowel.includes(str[i])) {
//       count++
//     }
//   }
//   return count;
// }

const getCount = (str) => str.split('').filter(x => ['a', 'i', 'u', 'e', 'o'].includes(x)).length

console.log(getCount('abracadabra'))
console.log(getCount('abudabi'))
console.log(getCount('anjay'))