

// Strings (cadenas de texto)

// Concatenación

let myName = "Diego"
let greeting = "Hola, " + myName + "!"
console.log(greeting)
console.log(typeof greeting)

// Longitud

console.log(greeting.length)

// Acceso a caracteres

console.log(greeting[0])
console.log(greeting[11])

// Métodos comunes

console.log(greeting.toUpperCase()) // Mayúsculas
console.log(greeting.toLowerCase()) // Minúsculas
console.log(greeting.indexOf("Hola")) // Índice
console.log(greeting.indexOf("Diego"))
console.log(greeting.indexOf("DecoDev"))
console.log(greeting.includes("Hola")) // Incluye
console.log(greeting.includes("Diego"))
console.log(greeting.includes("DecoDev"))
console.log(greeting.slice(0, 10)) // Sección
console.log(greeting.replace("D", "DecoDev")) // Reemplazo

// Template literals (plantillas literales)

// Strings en varias líneas
let message = `Hola, este
es un
curso de
JavaScript`
console.log(message)

// Interpolación de valores
let email = "Diegosebastianorona@gmail.com"
console.log(`Hola, ${myName}! Tu email es ${email}.`)