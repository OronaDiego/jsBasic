
// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for(let i = 1; i <= 20; i++){
    console.log(i);
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
console.log("*********Bucle que suma todos los números del 1 al 100 y muestra el resultado*****");
let total = 0; //Inicializo una variable para la suma

for (let i = 0; i <= 100; i++){
    total += i; // con el operador de asignacion 
}   // al total le sumo el valor de i en cada vuelta del bucle 
console.log(`El total de la suma de los números del 1 al 100 es: ${total}`);



// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
console.log("***Pares del 1 al 50");

for (i=0; i<=50; i+=2){
    console.log(i);
    
}



// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
console.log("***Imprimo cada  nombre almacenado en el array***");

let nombres = ["Diego", "Bruno", "Julia", "Faustina"];

for (let v of nombres){
console.log(v);
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
console.log("**Bucle que cuenta el número de vocales en una cadena de texto");

let cadena = "Texto de ejemplo para que el bucle cuenta la cantidad de vocales que contengo";
let vocales = 0;

for(let v of cadena){
    if(v === "a" || v ==="e" || v==="i" || v==="o" || v==="u" ){
        vocales += 1;
    }
    
}
console.log(`${vocales} Vocales, hay en la cadena de texto`)




// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let numbers = [10,23,150,22,27,50,99];
let producto = 1; 
for( v of numbers){    
    producto *= v;
}
console.log(`El producto es: ${producto}`);


// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
console.log("***Tabla del 5****");

let tablaCinco = [1,2,3,4,5,6,7,8,9,10];
let tabla = 0;
for(v of tablaCinco){
     v *= 5;
    tabla ++; 
    console.log(`5 x ${tabla} = ${v}`);
}



// 8. Usa un bucle para invertir una cadena de texto
console.log("*****Cadena Invertida");

let cadena1 = "CadenaDeTexto"
for(let i = cadena1.length - 1; i >= 0; i--){
    console.log(cadena1[i]);
}

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
console.log("***SecFibonacci****");
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34
let n1 = 0; 
let n2 = 1; 
let siguienteNumero;

console.log(n1); 
console.log(n2); 

for (let i = 2; i < 10; i++) { // Comienza desde 2 porque los dos primeros ya están impresos
    siguienteNumero = n1 + n2; // Calcula el siguiente número de la secuencia
    console.log(siguienteNumero);

    n1 = n2; // Actualiza n1 al valor de n2
    n2 = siguienteNumero; // Actualiza n2 al siguiente número de la secuencia
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
console.log("**bucle creador de nuevo array con numeros mayores a 10");

let mayores = [];
for(v of numbers){
    console.log(v);
    if(v >= 10){
        mayores.push(v)
    }
}
console.log(mayores);
