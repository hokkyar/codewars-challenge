const descendingOrder = (n) => Number(n.toString().split('').map(el => Number(el)).sort((a, b) => b - a).join(''))


console.log(descendingOrder(0))
console.log(descendingOrder(111))
console.log(descendingOrder(15))
console.log(descendingOrder(1021))
console.log(descendingOrder(123456789))
console.log(descendingOrder(42145))