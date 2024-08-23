

// 1. Crea un array que almacene cinco animales
let animales = ["Perro", "Gato", "Gallina", "Loro","Mono"];

// 2. Añade dos más. Uno al principio y otro al final
animales.push("Hamster");
console.log(animales);
animales.unshift("Tortuga");
console.log(animales);

// 3. Elimina el que se encuentra en tercera posición
animales.splice(3,1);
console.log(animales);

// 4. Crea un set que almacene cinco libros
let libros = new Set(["El Club de las 5", "El señor de los anillos", "Algoritmos", "En busqueda de la felicidad"])
console.log(libros);

// 5. Añade dos más. Uno de ellos repetido
libros.add("Libro1");
libros.add("Libro1");
console.log(libros);

// 6. Elimina uno concreto a tu elección
console.log(libros.delete("El Club de las 5"));

// 7. Crea un mapa que asocie el número del mes a su nombre

let meses = new Map([
    ["01","Enero"],
    ["02","Febrero"],
    ["03","Marzo"],
    ["04","Abril"],
    ["05","Mayo"],
    ["06","Junio"],
    ["07","Julio"],
    ["08","Agosto"],
    ["09","Septiembre"],
    ["10","Octubre"],
    ["11","Nobiembre"],
    ["12","Diciembre"],
]);

console.log(meses);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(meses.has("05"));
console.log(meses.get("05"));

// 9. Añade al mapa una clave con un array que almacene los meses de verano
meses.set("verano", "Enero, Febrero, Marzo");
console.log(meses);

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let array1= [1,2,3,4,5,6,7,8,9,10];
console.log(array1);
let mySet = new Set(array1);
console.log(mySet);
// let myMap = new Map(mySet);
// console.log(myMap);


for (i=0; i < animales.length; i ++){
    console.log(`Los animales que estan dentro del array son: ${animales[i]}`);
    
}
for(i=0; i < mySet.size; i++){
    console.log(`Contenido de mySet, ${i}`);
    
}