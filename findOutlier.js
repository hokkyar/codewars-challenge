// function findOutlier(integers) {
//   const totalOdd = integers.filter((n) => n % 2 !== 0).length
//   const totalEven = integers.filter((n) => n % 2 == 0).length
//   return (totalOdd < totalEven) ? integers.filter((n) => n % 2 !== 0)[0] : integers.filter((n) => n % 2 === 0)[0]
// }

// another solution
function findOutlier(int) {
  var even = int.filter(a => a % 2 == 0);
  var odd = int.filter(a => a % 2 !== 0);
  return even.length == 1 ? even[0] : odd[0];
}


console.log(findOutlier([0, 1, 2]))
console.log(findOutlier([1, 2, 3]))
console.log(findOutlier([2, 6, 8, 10, 3]))
console.log(findOutlier([0, 0, 3, 0, 0]))
console.log(findOutlier([1, 1, 0, 1, 1]))