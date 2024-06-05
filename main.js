console.warn('Declaracion de variables')

let nombre = 'samuel'
console.log(nombre)

console.warn('Tipos de datos')

let edad = 18
let precio = 12.99
let ciudad = 'Barranquilla'
let esEstudiante = true

console.log(edad)
console.log(precio)
console.log(ciudad)
console.log(esEstudiante)

console.warn('Concatenacion')

let nombre1 = 'camilo'
let apellido = 'perez'
console.log('Hola, ' + nombre1 + ' ' + apellido)


console.warn('Operaciones Matemáticas')

let num1 = 5
let num2 = 3
console.log('El primer numero es, ' + num1)
console.log('El segundo numero es, ' + num2)
console.log('Suma: ' + (num1 + num2))
console.log('Resta: ' + (num1 - num2))
console.log('Multiplicación: ' + (num1 * num2))
console.log('División: ' + (num1 / num2))

console.warn('Incremento y Decremento')

let contador = 5
contador++ // incremento
contador-- // decremento
console.log(contador)

console.warn('Prompt y Alert')

let nombre2 = prompt('Ingrese su nombre:')
alert('Bienvenido, ' + nombre)

console.warn('Cálculo de Área')

let radio = parseFloat(prompt('Ingrese el radio del círculo:'))
let area = Math.PI * Math.pow(radio, 2)
alert('El área del círculo es: ' + area)

console.warn(' Conversión de Unidades')

let celsius = parseFloat(prompt('Ingrese la temperatura en grados Celsius:'))
let fahrenheit = (celsius * 9/5) + 32
alert('La temperatura en grados Fahrenheit es: ' + fahrenheit)


console.warn(' Operador Ternario')
let numero = parseFloat(prompt('Ingrese un número:'))
let resultado = (numero > 0) ? 'El número es positivo' : 'El número es negativo'
alert(resultado)

console.warn(' Condicional if-else')

let edad1 = parseInt(prompt('Ingrese su edad:'))
if (edad1 >= 18) {
  alert('Es mayor de edad')
} else {
  alert('Es menor de edad')
}


console.warn(' Condicional switch')

let dia = parseInt(prompt('Ingrese un número del 1 al 7:'))
switch (dia) {
  case 1:
    alert('Lunes')
    break
  case 2:
    alert('Martes')
    break
  case 3:
    alert('Miércoles')
    break
  case 4:
    alert('Jueves')
    break
  case 5:
    alert('Viernes')
    break
  case 6:
    alert('Sábado')
    break
  case 7:
    alert('Domingo')
    break
  default:
    alert('Número inválido')
}



