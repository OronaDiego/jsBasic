
// Set

// Declaración

let mySet = new Set()

console.log(mySet)

// Inicialización

mySet = new Set(["Diego", "Orona", "Decodev", 33, true, "Diegosebastianorona@gmai.com"])

console.log(mySet)

// Métodos comunes

// add y delete

mySet.add("https://diego.dev")

console.log(mySet)

mySet.delete("https://diego.dev")

console.log(mySet)

console.log(mySet.delete("diego"))
console.log(mySet.delete(4))

console.log(mySet)

// has

console.log(mySet.has("Diego"))
console.log(mySet.has("Orona"))

// size

console.log(mySet.size)

// Convertir un set a array
let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array a set

mySet = new Set(myArray)
console.log(mySet)

// No admite duplicados

mySet.add("diegosebastianorona@gmail.com")
mySet.add("diegosebastianorona@gmail.com")
mySet.add("diegosebastianorona@gmail.com")
mySet.add("diegosebastianorona@gmail.com")
console.log(mySet)