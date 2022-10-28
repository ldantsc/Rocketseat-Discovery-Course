// function expression
// function anonymous

//parâmetros (paramenters)

const sum = function(number1, number2) {
    let total = number1 + number2
    return total
}

sum(2, 3) // arguments - argumentos

//passar argumentos para a invocaçao de uma função
// e criar os parâmetros que irão receber os argumentos da função 

let number1= 34
let number2 = 25
sum(number1, number2)

// console.log(`o número 2 é ${number}`)
// console.log(`o número 1 é ${number1}`)
console.log(`a soma dos numeros é ${sum(number1, number2)}`) // undefined 