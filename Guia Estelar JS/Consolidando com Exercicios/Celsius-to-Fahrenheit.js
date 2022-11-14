/*
Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32
*/

let string = "C"

function Degree(string) {
    switch(string){
        case 'c':
            C = (F - 32) * 5/9
            break;
        case 'f':
            F = C * 9/5 + 32
            break;
    }
}