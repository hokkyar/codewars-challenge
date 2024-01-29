// function createPhoneNumber(numbers) {
//   return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
// }

// const createPhoneNumber = (numbers) => `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6).join('')}`

// ANOTHER SOLUTION
function createPhoneNumber(numbers) {
  var format = "(xxx) xxx-xxxx";
  for (var i = 0; i < numbers.length; i++) {
    format = format.replace('x', numbers[i]);
  }
  return format;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))