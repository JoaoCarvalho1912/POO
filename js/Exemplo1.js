/* Area do retangulo  - JEITO COMUM */

const leia = require('prompt-sync')()
let b = leia("Insira o valor da base: ");
let h = leia("Insira o valor da altura: ");
let b2 = leia("Insira o 2º valor da base ");
let h2 = leia("Insira o 2º valor da base ");

 /* b = 5 
h = 9 */

let area = b*h
let area2 = b2*h2
console.log("A área do 1º retângulo é ", area)
console.log("A área do 2º retângulo é ", area2)

