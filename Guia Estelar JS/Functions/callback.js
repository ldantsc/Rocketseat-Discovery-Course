// callback function
//é uma função que está sendo passada para outra função como parâmetro.

let numero = 40



function sayMyName(name) {
    console.log('antes de executar')
    name(numero)
    console.log('depois de executar')
}

sayMyName(
    function name(number) {
        console.log('estou em uma callback')
        console.log(number + 5)
    }
)