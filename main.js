console.warn('1. INTERCAMBIO DE VALORES')

let a = 5;
let b = 10;

console.log("Antes del intercambio:");
console.log("a =", a);
console.log("b =", b);

let temp = a;
a = b;
b = temp;

console.log("Después del intercambio:");
console.log("a =", a);
console.log("b =", b);

console.warn('2. VALOR MAYOR')

function mayor() {
  let num1 = parseFloat(prompt('Ingrese el primer numero'))
  let num2 = parseFloat(prompt('Ingrese el segundo numero'))


  if (num1 > num2){
    alert(`El mayor es ${num1}`)
  }
  else if(num1 < num2){
    alert(`${num2} es el mayor`)
  }
  else{
    alert('Los dos numeros son iguales')
  }
}

mayor();


console.warn('3. PAR O IMPAR')

function paroimpar(){
  let numero = parseInt(prompt('Ingrese el numero (par o impar)'))

  if (numero % 2 === 0){
    alert(`El numero ${numero}, es par`)
  }
  else{
    alert(`El numero ${numero}, es impar`)
  }
}

paroimpar();

console.warn('4. Descuento')
function calcularPrecioFinal() {
  let precioOriginal = parseFloat(prompt("Ingrese el precio original del producto: "));
  let porcentajeDescuento = parseFloat(prompt("Ingrese el porcentaje de descuento: "));

  if (isNaN(precioOriginal) || isNaN(porcentajeDescuento)) {
    alert("Error: ingrese valores numéricos válidos");
    return;
  }

  if (porcentajeDescuento < 0 || porcentajeDescuento > 100) {
    alert("Error: el porcentaje de descuento debe ser un valor entre 0 y 100");
    return;
  }

  let descuento = (precioOriginal * porcentajeDescuento) / 100;
  let precioFinal = precioOriginal - descuento;

  console.log(`El precio final es: ${precioFinal}`);
}

calcularPrecioFinal();


console.warn('5. Calcular Area')
function calcularAreaCirculo() {
  let radio = parseFloat(prompt("Ingrese el radio del círculo: "));

  if (isNaN(radio) || radio <= 0) {
    alert("Error: ingrese un valor numérico positivo para el radio");
    return;
  }

  const PI = Math.PI;
  let area = PI * (radio ** 2);

  console.log(`El área del círculo es: ${area.toFixed(2)}`);
}

calcularAreaCirculo();


console.warn('6. Convertir Temperatura')
function celsiusToFahrenheit() {
  let celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius: "));

  if (isNaN(celsius)) {
    alert("Error: ingrese un valor numérico válido");
    return;
  }

  let fahrenheit = (celsius * 9/5) + 32;

  console.log(`La temperatura en grados Fahrenheit es: ${fahrenheit.toFixed(2)}`);
}

celsiusToFahrenheit();

console.warn("7. Bucle For")
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.warn("8. Bucle While")
let numero1 = parseFloat(prompt("Ingrese un número: "));

while (numero1 >= 0) {
  console.log(`Has ingresado: ${numero1}`);
  numero1 = parseFloat(prompt("Ingrese otro número: "));
}

console.log("Has ingresado un número negativo. Fin del programa.");


console.warn("9. Tabla de Multiplicar")
let numero = parseInt(prompt("Ingrese un número: "));

console.log(`Tabla de multiplicar del ${numero}:`);

for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}

console.warn("10. Suma de Números Pares")
let suma = 0;

for (let i = 2; i <= 100; i += 2) {
  suma += i;
}

console.log(`La suma de los números pares del 1 al 100 es: ${suma}`);


console.warn("11. Objeto Persona")
const persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Bogotá",
  presentarse() {
    console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años. Vivo en ${this.ciudad}.`);
  }
};

persona.presentarse();

console.warn("12. Array de Objetos")
const personas = [
  {
    nombre: "Juan",
    edad: 30,
    ciudad: "Bogotá"
  },
  {
    nombre: "María",
    edad: 25,
    ciudad: "Medellín"
  },
  {
    nombre: "Pedro",
    edad: 35,
    ciudad: "Cali"
  }
];

for (let i = 0; i < personas.length; i++) {
  const persona = personas[i];
  console.log(`Nombre: ${persona.nombre}`);
  console.log(`Edad: ${persona.edad}`);
  console.log(`Ciudad: ${persona.ciudad}`);
  console.log("-------------------");
}

console.warn("13. Función para Calcular Promedio")
function calcularPromedio(arr) {
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    suma += arr[i];
  }
  return suma / arr.length;
}


