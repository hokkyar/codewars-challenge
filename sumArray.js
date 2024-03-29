function sumArray(array) {
  if (!array || array.length < 3) return 0
  array.splice(array.indexOf(Math.min(...array)), 1)
  array.splice(array.indexOf(Math.max(...array)), 1)
  return array.reduce((a, b) => a + b)
}

console.log(sumArray([0, 1, 6, 10, 10]))
console.log(sumArray([1, 1, 11, 2, 3]))
console.log(sumArray(null))
console.log(sumArray([]))
console.log(sumArray([3]))
console.log(sumArray([3, 5]))
console.log(sumArray([6, 2, 1, 8, 10]))
console.log(sumArray([-6, -20, -1, -10, -12]))
console.log(sumArray([-6, 20, -1, 10, -12]))