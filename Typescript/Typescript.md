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