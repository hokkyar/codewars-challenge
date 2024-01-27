// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     let smallest = args[0]
//     for (let i = 1; i < args.length; i++) {
//       if (args[i] < smallest) {
//         smallest = args[i]
//       }
//     }
//     return smallest
//   }
// }

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

let solution = new SmallestIntegerFinder()
console.log(solution.findSmallestInt([78, 56, 232, 12, 8]))
console.log(solution.findSmallestInt([78, 56, 232, 12, 18]))
console.log(solution.findSmallestInt([78, 56, 232, 412, 228]))
console.log(solution.findSmallestInt([78, 56, 232, 12, 0]))
console.log(solution.findSmallestInt([1, 56, 232, 12, 8]))
