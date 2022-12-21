const questions = [
    "O que eu aprendi hoje?",
    "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?"
]

const ask = (index = 0) => {
    process.stdout.write(`\n\n ${questions[index]} > `)
}

ask()

// answers recebera as respostas
const answers = []
// on = ouvir eventos
// função data será rodada toda vez que for inserir os dados no processo
process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length){
        ask(answers.length)
    } else {
        console.log(answers)
         //função exit para fechar o processo
        process.exit()
    }
})

//data.toString().trim() = pegando os dados escritos, transformando em string, trim para remover espaços vazios na string
//process.stdout.write(data.toString().trim() + '\n')