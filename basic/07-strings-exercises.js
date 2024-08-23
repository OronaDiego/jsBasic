/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Concatena dos cadenas de texto
let cadena1 = "HOLA, ";
let cadena2 = "¿Como estas?"
let nombre = "Diego";
let age = 33;
console.log(cadena1+cadena2);

// 2. Muestra la longitud de una cadena de texto
console.log(cadena2.length);


// 3. Muestra el primer y último carácter de un string
console.log(`Primer caracter es: ${cadena2[0]}, Ultimo caracter es: ${cadena2[11]}`);

// 4. Convierte a mayúsculas y minúsculas un string
console.log(cadena1.toLowerCase());
console.log(cadena2.toUpperCase());

// 5. Crea una cadena de texto en varias líneas
let cadena3 = `Hola como estas? 
        esta es una cadena de texto
            de varias lineas, Utilizando 
                            template literals`
console.log(cadena3);


// 6. Interpola el valor de una variable en un string
console.log(`Hola, ${nombre}! Bienvenido al template literals donde 
    no solo podemos redactar una cadena de texto de varias lineas, sino que podemos 
    hacer interpolacion de un string. Otro dato que tengo de ti es tu edad y es de ${age}`);


// 7. Reemplaza todos los espacios en blanco de un string por guiones
let cadena4 = "Esta es una cadena con espacios y en una sola linea para remplazar esos espacios por giones medios"
console.log(cadena4.replace(/ /g ,"-")); // con el esta exprecion regular //g se encarga de buscar todos los espacios vacios 
                                // que encuentra en la cadena de texto de la otra manera " ", dejando el espacion en el medio
                                //solo reemplaza solo la primera por default


// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(`En este console.log uso el metodo includes para ver si en la variable
    cadena3 incluye el caracter s y nos da como resultado:  ${cadena3.includes("s")}`);


// 9. Comprueba si dos strings son iguales
console.log(cadena1 == cadena2);
let cadenaCompar = "Hola";
let cadenaCompar1 = "Hola";
console.log(cadenaCompar == cadenaCompar1);
console.log(cadenaCompar === cadenaCompar1);



// 10. Comprueba si dos strings tienen la misma longitud
let str1= "HOla ";
let str2= "HOLA  ";
console.log(str1.length == str2.length);

