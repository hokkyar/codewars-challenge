// https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript

// function twoSum(numbers, target) {
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       if (numbers[i] + numbers[j] == target) {
//         return [i, j]
//       }
//     }
//   }
// }

function twoSum(numbers, target) {
  const map = {}
  for (let i = 0; i < numbers.length; i++) {
    if (map[numbers[i]] !== undefined) {
      return [map[numbers[i]], i];
    } else {
      map[target - numbers[i]] = i;
    }
  }
}

console.log(twoSum([1, 2, 3], 4))
console.log(twoSum([3, 2, 4], 6))
console.log(twoSum([1234, 5678, 9012], 14690))