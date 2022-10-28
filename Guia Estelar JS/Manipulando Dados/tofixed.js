/*  Casas decimais

    Para determinar uma quantia de casas decimais de um número pode-se 
    usar o método toFixed() colocando como argumento quantas casas decimais o número terá. 
    Para mudar a formatação do número de separado por ponto para separado por vírgula é possível usar o método replace(".", ","). 
    O resultado final será do tipo string, e a conversão para o tipo número não será possível por que a vírgula não é considerada parte de um número.
*/

let number = 5456548452.5487564
console.log(number.toFixed(3).replace(".",","))

// Função toFixed() atrelada ao objeto number
// Quando uma função é atrelada ao objeto é chamada de método

//função replace trocando ponto por vírgula // porem transformou o dado tipo number em string