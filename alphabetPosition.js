// function alphabetPosition(text) {
//   text = [...text.toLowerCase()]
//   let result = ''
//   const alphabet = {
//     'a': 1,
//     'b': 2,
//     'c': 3,
//     'd': 4,
//     'e': 5,
//     'f': 6,
//     'g': 7,
//     'h': 8,
//     'i': 9,
//     'j': 10,
//     'k': 11,
//     'l': 12,
//     'm': 13,
//     'n': 14,
//     'o': 15,
//     'p': 16,
//     'q': 17,
//     'r': 18,
//     's': 19,
//     't': 20,
//     'u': 21,
//     'v': 22,
//     'w': 23,
//     'x': 24,
//     'y': 25,
//     'z': 26,
//   }
//   for (let i = 0; i < text.length; i++) {
//     if (alphabet[text[i]]) {
//       result += alphabet[text[i]] + ' '
//     }
//   }
//   return result.slice(0, -1)
// }

function alphabetPosition(text) {
  return [...text.toLowerCase()].map(char => {
    const position = char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    return (position >= 1 && position <= 26) ? position.toString() : '';
  }).filter(el => el != '').join(' ')
  // }).filter(Boolean).join(' ')
}


console.log(alphabetPosition("The sunset sets at twelve o' clock."))
console.log(alphabetPosition("The narwhal bacons at midnight."))