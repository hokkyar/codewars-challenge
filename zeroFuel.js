// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   distanceToPump = distanceToPump - mpg * fuelLeft
//   if (distanceToPump > 0) return false
//   return true
// };

const zeroFuel = (distanceToPump, mpg, fuelLeft) => (distanceToPump - mpg * fuelLeft > 0) ? false : true

console.log(zeroFuel(50, 25, 2))