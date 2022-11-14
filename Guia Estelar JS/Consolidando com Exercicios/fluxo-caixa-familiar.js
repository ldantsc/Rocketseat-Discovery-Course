/*
let caixa = {
    receitas: [50],
    despesas: [75],
}

function Calc (value1, value2) {
   let total = value1 - value2;
   if (total > 0) {
    console.log(`Saldo Positivo: ${total}`)
   } else if (total < 0) {
    console.log(`Saldo negativo: ${total}`)
   } else {
   console.log(`Saldo igual a ${total}`)
   }
}

console.log(Calc(caixa.receitas, caixa.despesas))
*/


let family = {
    incomes: [2500, 3200, 250.43, 360.45],
    expenses: [320.34, 128.45, 176.87, 1450.00]
}

function sum(array) {
    let total = 0;

    for(let _value of array){
        total += _value
    }

    return total
}

function CalculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const CalculateExpenses = sum(family.expenses)

    const total = calculateIncomes - CalculateExpenses

    const itsOK = total >= 0

    let balanceText = "negativo"

    if (itsOK) {
        balanceText = "positivo"
    }

    console.log(`Seu saldo é ${balanceText}: R$ ${total.toFixed(2)}`)
}

CalculateBalance()