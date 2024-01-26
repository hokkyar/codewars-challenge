// function converter(mpg) {
//   return Number((mpg * (1.609344 / 4.54609188)).toFixed(2))
// }

const converter = (mpg) => Number((mpg * (1.609344 / 4.54609188)).toFixed(2))

console.log(converter(10))
console.log(converter(20))
console.log(converter(30))