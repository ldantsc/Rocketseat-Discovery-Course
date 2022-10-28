/*Operador condicional ternário

Os operadores ternários, conhecidos como operadores de condição, como o nome sugere, são dependentes de condições e podem entregar valores diferentes com base nelas.

Funciona da seguinte forma;

// condição então valor 1 se não valor 2
// condição ? valor1 : valor2

Exemplo de uso:
*/

// Café da manhã top

let pao = false
let queijo = false

const niceBreakfast = pao || queijo ? 'Café top' : 'Café ruim'

console.log(niceBreakfast)

//

let age = 16
const canDriver = age >= 18 ? 'Pode dirigir' : 'Não pode dirigir'
console.log(canDriver)
