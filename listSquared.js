function listSquared(m, n) {
  const result = []
  for (let i = m; i <= n; i++) {
    let factor = []
    for (let j = 1; j <= i; j++) {
      if (i % j == 0) {
        factor.push(j)
      }
    }
    let sum = factor.map((el) => Math.pow(el, 2)).reduce((a, b) => a + b)
    if (Number.isInteger(Math.sqrt(sum))) {
      result.push([i, sum])
    }
  }
  return result
}

console.log(listSquared(1, 250))
console.log(listSquared(42, 250))
console.log(listSquared(250, 500))
