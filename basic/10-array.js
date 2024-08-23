

// Array

// Declaración

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicialización

myArray = [3]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray = ["Diego", "Orona", "DecoDev", 33, true]
myArray2 = new Array("Diego", "Orona", "decodev", 37, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[2] = "Diego"
// myArray2[0] = "Seba"
myArray2[1] = "Decodev"
myArray2[4] = "Decodev"

console.log(myArray2)

myArray = []
myArray[2] = "Diego"
// myArray[0] = "Deco"
myArray[1] = "Decodev"

console.log(myArray)

// Métodos comunes

myArray = []

// push y pop

myArray.push("Diegi")
myArray.push("Orona")
myArray.push("decodev")
myArray.push(33)

console.log(myArray)

console.log(myArray.pop()) // Elimina el último y lo devuelve
myArray.pop()

console.log(myArray)

// shift y unshift

console.log(myArray.shift())
console.log(myArray)

myArray.unshift("Diego", "decodev")
console.log(myArray)

// length

console.log(myArray.length)

// clear

myArray = []
myArray.length = 0 // alternativa
console.log(myArray)

// slice

myArray = ["Diego", "orona", "decodev", 33, true]

let myNewArray = myArray.slice(1, 3)

console.log(myArray)
console.log(myNewArray)

// splice

myArray.splice(1, 3)
console.log(myArray)

myArray = ["Diego", "Orona", "Decodev", 33, true]

myArray.splice(1, 2, "Nueva entrada")
console.log(myArray)