

/*
O que é um módulo no Node.js?
Considere os módulos iguais às bibliotecas JavaScript.
Um conjunto de funções que você deseja incluir em seu aplicativo.


Para incluir um módulo, use a require()função com o nome do módulo:

//Módulos nativos
const path = require('path')

//exibir o nome base do arquivo
console.log(path.basename(__filename))

*/

//meus módulos
const myModule = require('./exports')

console.log(myModule)