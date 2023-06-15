# Typescript

O TypeScript foi criado pela Microsoft para trazer um superset de tipagens para o JavaScript.

A diferença entre o JavaScript e TypeScript é a sua tipagem que no JS não é obrigatório, já no TS é obrigatório, mas nem pra todos os casos. Algumas vantagens de utilizar o TS é que a sua adoção pode ocorrer de forma gradual em um projeto JavaScript.

## Porquê utilizar TypeScript?

A maior vantagem de usar o TypeScript além de aumentar a nossa produtividade no dia a dia é ele reconhecer os erros durante o desenvolvimento, diferente do JavaScript que reconhecerá apenas quando o projeto é executado.

Exemplo:
```js

function sum(a, b){
  return a + b;
}

console.log(sum('1', '2'));

// Ao executar esse trecho de código o resultado seria 12.
Se estivéssemos utilizando o TypeScript não precisaríamos executar para identificar o erro.

```

## Any
Ao declarar uma variável no TypeScript o seu tipo por padrão será any. Mas devemos tomar um certo cuidado com essa tipagem que ela pode ser perigosa ao decorrer do nosso projeto, não é muito recomendada a sua utilização.

Exemplo:
```ts

let info: any;

info = [123];
info = 'João';
info = true;
info = 10.50;

// Com o tipo any a variável aceitará qualquer valor.
```

## Inferência de tipos

O TypeScript reconhece automaticamente o tipo da variável ao passar algum valor para ela.

```ts

let user = "João" //o ts reconhece o tipo dessa variável, no caso uma string neste exemplo

user = 10

```
## Tipos primitivos

Esses são os tipos primitivos que podemos utilizar no TypeScript:

```ts

let loading: boolean;
loading = false;

let email: string;
email = "joao@email.com";

let price: number;
price = 10.50;
price = 10;

```

## Matrizes

Existem duas maneiras de tipar arrays no TypeScript, confira os exemplos:

```ts

let numbers: number[];
numbers = [1,2,3,4,5,6];

let users: Array<string>;
users = ['Rodrigo', 'João'];

```

## Funções

Uma função pode ter ou não um retorno, quando ela não tem um retorno ela é do tipo void

Dessa maneira, tipamos dessa forma no TypeScript:

```ts

function showMessages(message: string):void {
    console.log(message)
}

```
Já quando a função tem um retorno, a tipagem é inferida automaticamente na função.

```ts

function showMessages(message: string) {
   return message;
}

console.log(showMessages("Oi, João"))

``` 