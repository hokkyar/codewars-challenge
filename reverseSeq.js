// const reverseSeq = n => {
//   const result = []
//   for (let i = n; i >= 1; i--) {
//     result.push(i)
//   }
//   return result
// };

// const reverseSeq = (n) => Array(n).fill().map((_, i) => i+1).reverse()

const reverseSeq = (n) => [...Array(n)].map((_, i) => n - i)

console.log(reverseSeq(5))