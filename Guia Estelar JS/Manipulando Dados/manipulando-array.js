/*
Manipulando arrays

Existem várias maneiras de manipular arrays, como: o método push(), que adiciona um elemento no final do array, o método unshift(), que adiciona um elemento no começo do array, o método pop(), que retira um elemento do final do array, o método shift(), que retira um elemento do começo do array, o método slice(), que recebe como argumentos a posição de início e a posição do fim da parte que você quer selecionar, e retorna os valores destas posições, o método splice(), que recebe como argumentos a posição de início e a quantidade de elementos que você quer remover e o método indexOff(), que encontra o index do valor que recebe como argumento em um array.
 */

let techs = ["html", "css", "js"]

// adicionar um item no fim
techs.push("nodejs")

// adicionar no começo
techs.unshift("sql")

// remover do fim
techs.pop()

// remover do começo
techs.shift()

// pegar somente alguns elementos do array
console.log(techs.slice(1,3))

// remover 1 ou mais items em qualquer posição do array 
//removendo a partir da posição 1, até posição 2
techs.splice(1, 2)

// encontrar a posição de um elemento no array
let index = techs.indexOf("css")