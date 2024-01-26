function findOdd(A) {
  const numbers = {}
  for (let i = 0; i < A.length; i++) {
    (numbers[A[i]]) ? numbers[A[i]]++ : numbers[A[i]] = 1
  }
  return parseInt(Object.keys(numbers).filter((x) => numbers[x] % 2 != 0).join(''))
}


console.log(findOdd([7]))
console.log(findOdd([1, 1, 2]))
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]))
console.log(findOdd([0, 1, 0, 1, 0]))