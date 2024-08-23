
let a = 10; 
let b = 12;
let c = 10;
let d = 5;
// 1. Crea una variable para cada operación aritmética
let suma =  a + b;
let resta = a - b;
let division = a * b;
let resto = a % b;
let exponencial = a ** b;

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

suma += 2;
resta -= 1;
division /= 2;
resto %=1;
exponencial **= 2;


// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación
console.log(a < b);
console.log(b > a);
console.log(a == c);
console.log(a === c);
console.log(a !== b);

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(a>b);
console.log(b<a);
console.log(b<=a);
console.log(b == a);
console.log(a !== c);

// 5. Utiliza el operador lógico and
console.log(a<b && b>a);

// 6. Utiliza el operador lógico or
console.log(a>b || b>a);
// 7. Combina ambos operadores lógicos
console.log(10>0 && 1<2 || 10 <= 5);
console.log(10>11 && 1<2 || 10 <= 5);

// 8. Añade alguna negación
console.log(!(10>11 && 1<2 || 10 <= 5));

// 9. Utiliza el operador ternario
let op = 10<11 && 5>1
console.log(op);
op ? console.log("es verdadero") : console.log("es Falso");



// 10. Combina operadores aritméticos, de comparáción y lógicas