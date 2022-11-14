/*

let notas = 80

if (notas >= 90){
    console.log("A")
} else if (notas >= 80 && notas <= 89) {
    console.log("B")
} else if (notas >= 70 && notas <= 79) {
    console.log("C")
} else if (notas >= 60 && notas <= 69) {
    console.log("D")
} else if (notas < 60) {
    console.log("F")
}

*/

/*
let score = 0;
let scoreA = score >= 90 && score <= 100;
let scoreB = score >= 80 && score <= 89;
let scoreC = score >= 70 && score <= 79;
let scoreD = score >= 60 && score <= 69;
let scoreF = score < 60 && score >= 0;

let scoreFinal;

if (scoreA) {
    scoreFinal = "A"
}else if (scoreB) {
    scoreFinal = "B"
} else if(scoreC) {
    scoreFinal = "C"
} else if(scoreD)  {
    scoreFinal = "D"
} else if(scoreF) {
    scoreFinal = "F"
} else {
    scoreFinal = "Nota inválida"
}

console.log(scoreFinal)
*/

function getScore (score) {
let scoreA = score >= 90 && score <= 100;
let scoreB = score >= 80 && score <= 89;
let scoreC = score >= 70 && score <= 79;
let scoreD = score >= 60 && score <= 69;
let scoreF = score < 60 && score >= 0;

let scoreFinal;

if (scoreA) {
    scoreFinal = "A"
}else if (scoreB) {
    scoreFinal = "B"
} else if(scoreC) {
    scoreFinal = "C"
} else if(scoreD)  {
    scoreFinal = "D"
} else if(scoreF) {
    scoreFinal = "F"
} else {
    scoreFinal = "Nota inválida"
}

return scoreFinal

}

console.log(getScore(100))
console.log(getScore(50))
console.log(getScore(-1))
console.log(getScore(120))
console.log(getScore(89))
console.log(getScore(70))