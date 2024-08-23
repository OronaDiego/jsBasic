

// 1. Escribe un comentario en una línea
//Comentario de una linea
// 2. Escribe un comentario en varias líneas
/*Comentario 
    de 
        varias 
                lineas*/
// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let str = "String, Cadena de texto";
let num = 10;
let num1= 10.5;
let bool = true;
let bool1= false;
let undef;
let nll = null;
let smbol = Symbol("symbol");
// 4. Imprime por consola el valor de todas las variables
console.log(`***Valor de las variables***
            variable String, ${str},
            variable Entero ${num},
            variable Decimal ${num1},
            variables Booleanas ${bool} y ${bool1},
            variables Undefined ${undef},
            variable Null ${nll},`);

// 5. Imprime por consola el tipo de todas las variables
console.log(`**Types of variables**
    variable String, ${typeof str},
    variable Entero ${typeof num},
    variable Decimal ${typeof num1},
    variables Booleanas ${typeof bool} y ${typeof bool1},
    variables Undefined ${typeof undef},
    variable Null ${typeof nll},`);


// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

let str2 = "Modificando valor  de la variable string";
let num2 = 1000000;
let num3= 10123456.5;
let boo1 = false;
let bool2= true;
let undef1 = null;
let nll1;

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
let str3 = "Modificando valor  de la variable string";
let num4 = 1000000;
let num5= 10123456.5;
let boo5 = false;
let bool5= true;
let undef2 = null;
let nll2;

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const st = "string";
const n = 30;
const n1 = 30.1;
const bool7= false;
const bool8= true;
//const und;
const nll5 = null

// 9. A continuación, modifica los valores de las constantes
// st = "string14";
// n = 3000;
// n1 = 30.12;
// bool7= true;
// bool8= false;
// und;
// nll5 = null
console.log(st);

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse