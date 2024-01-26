// function hero(bullets, dragons) {
//   dragons = (dragons * 2) - bullets
//   return (dragons > 0) ? false : true
// }

const hero = (bullets, dragons) => bullets >= dragons * 2

console.log(hero(2, 4))
