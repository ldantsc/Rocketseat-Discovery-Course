let input = 503

function calcularNotas (valor) {
    const notas = [100, 50, 20, 10, 5, 2, 1];
    console.log(valor)
    if (valor > 0) {
        for (let nota of notas) {
            let res = parseInt(valor / nota)
            console.log(`${res} nota(s) de R$ ${nota},00`)
            valor = valor % nota; 
        }
    } else {
        console.error('Valor igual a zero')
    }
    return;
}

console.log(calcularNotas(input))