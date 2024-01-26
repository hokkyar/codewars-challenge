// function DNAtoRNA(dna) {
//   let result = ""
//   for (let i = 0; i < dna.length; i++) {
//     if (dna[i] == 'T') {
//       result += 'U'
//     } else {
//       result += dna[i]
//     }
//   }
//   return result
// }

// const DNAtoRNA = (dna) => dna
//   .split('')
//   .map((el, i) => el === 'T' ? 'U' : el)
//   .join('')

const DNAtoRNA = (dna) => dna.replaceAll('T', 'U')

console.log(DNAtoRNA("TTTT"))
console.log(DNAtoRNA("GCAT"))
console.log(DNAtoRNA("GACCGCCGCC"))