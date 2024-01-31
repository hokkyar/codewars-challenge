// function filter_list(l) {
//   const result = []
//   for (let i = 0; i < l.length; i++) {
//     if (typeof l[i] === 'number') {
//       result.push(l[i])
//     }
//   }
//   return result
// }

const filter_list = (l) => l.filter((el) => typeof el === 'number')

console.log(filter_list([1, 2, 'a', 'b']))
console.log(filter_list([1, 'a', 'b', 0, 15]))
console.log(filter_list([1, 2, 'aasf', '1', '123', 123]))