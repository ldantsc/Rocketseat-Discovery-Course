//Manipulando Strings e Números 

//Transformando String em Números e Números em String


let string = '123'
console.log(typeof Number(string))

let number = 321
console.log(typeof String(number))

/*
Eles têm propósitos diferentes, mas podem ser usados para fins comuns.

O Number faz conversão de tipo, para Number. Ele vai tentar transformar uma string de digitos em numero:

Number('0123'); // 123
Number('0123abc'); // NaN (aqui as letras estragam a conversão)

O parseInt é mais versátil e complexo. Ele procura converter os primeiros digitos até aparecer um caracter que não seja digito:

parseInt('0123'); // 123
parseInt('0123abc'); // 123

Assim ele faz parse (análise de numeros e não-numeros) e depois converte o tipo. Mas têm algumas armadilhas. O parseInt aceita dois argumentos, pois permite converter strings em numeros com base decimal ou não. Vejamos este exemplo:

parseInt('0123abc'); // 123 - decimal
parseInt('0123abc', 8); // 83 - octal
parseInt('0123abc', 2); // 1 - binário

Assim pode dizer-se que a semântica é importante e o tipo de string também. Se só temos digitos e queremos um numero em base decimal o Number pode ser mais apropriado, por exemplo.

Em casos de notação com exponenciais, o parseInt vai falhar pois ele pára de analizar quando encontra letras em base decimal. Exemplo com 1000 em formato exponêncial 1e3:

Number(1e3); // 1000 
Number('1e3'); // 1000 
parseInt('1e3'); // 1 (!errado!)
parseInt('1e3', 32); // 1475

O Number distingue-se também do parseInt noutro aspeto: o parseInt retornta int(ie inteiros), enquato que o Number retorna numeros com ou sem casa decimal, consoante a entrada:

Number('10.5'); // 10.5
parseInt('10.5'); // 10

*/