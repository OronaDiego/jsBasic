
// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let n = 1;
if (n == 1) {
  console.log("Diego");
} else {
  console.log("el valor es cero");
}
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let user = "deco123";
let pass = "$%&/";

if (user == "deco123" && pass == "$%&/(") {
  console.log("Usuario y contraseña correcta");
} else {
  console.log("Usuario o contraseña incorrecta");
}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let number = 0;
if (number > 0) {
  console.log("El numero ingresado es positivo");
} else if (number == 0) {
  console.log("El numero ingresado es cero");
} else {
  console.log("El numero ingresado es negativo");
}
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
console.log("**********Sistema para calcular edad*****");
let age = 19;
if (age < 18) {
  console.log(
    `Es menor de edad, no puede votar le faltan ${
      18 - age
    } año para poder votar`
  );
} else if (age >= 18) {
  console.log("Puede votar es mayor de edad");
} else {
  console.log("el numero ingresado es invalido");
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad

let mayorMenor = age > 18 ? "es adulto" : "es menor";
console.log(mayorMenor);

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
// let mes = "Octubre";

// if(mes == "Enero" || mes == "Febrero" || mes == "Marzo"){
//     console.log("Estamos en verano");
// }else if(mes == "Abril" || mes == "Mayo" || mes == "Junio" ){
//     console.log("Estamos en otoño");
// }else if(mes == "julio" || mes == "Agosto" || mes == "septiembre"){
//     console.log("Estamos en invierno");
// }else if (mes == "Octubre" || mes == "Noviembre" || mes == "Diciembre"){
//     console.log("Estamos en Primavera");
// }else{
//     console.log("Ese dato es erroneo");
// }
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch (mes) {
//     case "Enero":
//         console.log(`Este mes ${mes}, tiene 31 dias`);
//         break;
//     case "Febrero":
//         console.log(`Este mes ${mes}, tiene 29 dias`);
//         break;
//     case "Marzo":
//         console.log(`Este mes ${mes}, tiene 31 dias`);
//         break;
//     case "Abril":
//         console.log(`Este mes ${mes}, tiene 30 dias`);
//         break;
//     case "Mayo":
//         console.log(`Este mes ${mes} tiene 31 dias`);
//         break;
//     case "Junio":
//         console.log(`Este mes ${mes} tiene 30 dias`);
//         break;
//     case "Julio":
//         console.log(`Este mes ${mes} tiene 31 dias`);
//         break;
//     case "Agosto":
//         console.log(`Este mes ${mes}, tiene 31 dias`);
//         break;
//     case "Septiembre":
//         console.log(`Este mes ${mes}, tiene 30 dias`);
//         break;
//     case "Octubre":
//         console.log(`Este mes ${mes}, tiene 31 dias`);
//         break;
//     case "Noviembre":
//         console.log(`Este mes ${mes}, tiene 30 dias`);
//         break;
//     case "Diciembre":
//         console.log(`Este mes ${mes}, tiene 31 dias`);
//         break;

//     default:console.log("Mes incorrecto");

// }

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
console.log(
  "**********Sistema para imprimir mensajes de saludos, dependiendo el idioma*****"
);
let idioma = "Portugues";
let saludo;
switch (idioma) {
  case "Español":
    saludo = "Hola como estas?";
    break;
  case "Ingles":
    saludo = "Hello how are you?";
    break;
  case "Portugues":
    saludo = "Olá, como vai?";
    break;
  default:
    saludo = "Este idioma no se reconoce";
}
console.log(saludo);

// 9. Usa un switch para hacer de nuevo el ejercicio 6.
console.log(
  `Sistema para saber que estacion del año estamos segun el mes ingresado`
);

let mes = "Mayo";
let estacion;

switch (mes) {
  case "Enero":
    estacion = "Estamos en verano";
    break;
  case "Febrero":
    estacion = "Estamos en verano";
    break;
  case "Marzo":
    estacion = "Estamos en verano";
    break;
  case "Arbil":
    estacion = "Estamos en otoño";
    break;
  case "Mayo":
    estacion = "Estamos en Otoño";
    break;
  case "Junio":
    estacion = "Estamos en Otoño";
    break;
  case "Julio":
    estacion = "Estamos en Invierno";
    break;
  case "Agosto":
    estacion = "Estamos en Invierno";
    break;
  case "Septiembre":
    estacion = "Estamos en Invierno";
    break;
  case "Octubre":
    estacion = "Estamos en Primavera";
    break;
  case "Noviembre":
    estacion = "Estamos en Primavera";
    break;
  case "Dicimebre":
    estacion = "Estamos en verano";
    break;

  default:
    estacion = "El dato ingresado no coincide con el mes";
}
console.log(estacion);

// 10. Usa un switch para hacer de nuevo el ejercicio 7
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
console.log("***Muestra el numero de dias que tiene el mes***");
console.log("---------");

let cantDiasMes;
switch (mes) {
  case "Enero":
    cantDiasMes = 31;
    break;
  case "Febrero":
    cantDiasMes = 29;
    break;
  case "Marzo":
    cantDiasMes = 31;
    break;
  case "Arbil":
    cantDiasMes = 30;
    break;
  case "Mayo":
    cantDiasMes = 31;
    break;
  case "Junio":
    cantDiasMes = 30;
    break;
  case "Julio":
    cantDiasMes = 31;
    break;
  case "Agosto":
    cantDiasMes = 31;
    break;
  case "Septiembre":
    cantDiasMes = 30;
    break;
  case "Octubre":
    cantDiasMes = 31;
    break;
  case "Noviembre":
    cantDiasMes = 30;
    break;
  case "Dicimebre":
    cantDiasMes = 31;
    break;

  default:
    cantDiasMes = "El dato ingresado es incorrecto, solo se aceptan meses del año"
}
console.log(`Hay ${cantDiasMes} dias, en el mes ${mes}`);

