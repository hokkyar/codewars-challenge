function getMiddle(s) {
  const length = Number.parseInt(s.length / 2)
  return (s.length % 2 === 0) ? `${s[length - 1]}${s[length]}` : `${s[length]}`
}

console.log(getMiddle("test"))
console.log(getMiddle("testing"))
console.log(getMiddle("middle"))
console.log(getMiddle("A"))