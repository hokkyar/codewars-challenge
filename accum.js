// function accum(s) {
//   let result = ''
//   for (let i = 0; i < s.length; i++) {
//     result += s[i].toUpperCase()
//     for (let j = 1; j <= i; j++) {
//       result += s[i].toLowerCase()
//     }
//     result += '-'
//   }
//   return result.slice(0, -1)
// }

const accum = (s) => s.split('').map((el, i) => el.toUpperCase() + el.toLowerCase().repeat(i)).join('-')


console.log(accum("ZpglnRxqenU"))
console.log(accum("NyffsGeyylB"))
console.log(accum("MjtkuBovqrU"))
console.log(accum("EvidjUnokmM"))
console.log(accum("HbideVbxncC"))