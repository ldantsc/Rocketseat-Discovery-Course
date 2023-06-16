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

## Union

O Operador Union, representado pelo pipe | nos permite adicionar mais de um tipo na variável. Vamos ao exemplo:

```ts

function printUserId(id: number | string) {  //podemos interpretar que o pipe significa 'ou'(AND)
    console.log(`O ID do usuário é: ${id}`);
}

printUserId(101);
printUserId("101");

// Dessa forma, podemos passar tanto number quanto string

```

## Generics

O generic no TypeScript nos permite reutilizar uma determinada implementação de código, de forma tipada. Para representar um generic, nós declaramos ele dessa forma <T> podendo ser utilizado qualquer outra letra, existem as convenções que podemos seguir:

```
<S> → Representando State 
<T> → Representando Type 
<K> → Representando Key 
<V> → Representando Value 
<E> → Representando Element

```

Exemplo de um trecho de código utilizando generics:

```ts

function useState<T>() {
    let state: T;

    function get(){
        return state;
    }

    function set(newValue: T){
        state = newValue;
    }

    return { get, set}
}

let newState = useState();
newState.get();
newState.set("João");
newState.set(123);

```

## Type

Para não ficar sempre repetindo os tipos para todas as variáveis podemos criar Types para cada uma delas.

Veja o exemplo a seguir:

```ts

type IdType = string | number | undefined;

let userId: IdType;
let adminId: IdType;

userId = 1;
userId = '1';
userId = undefined;

adminId = 1;
adminId = '2';
adminId = undefined;

```

## Type Assertions

Asserção de tipo normalmente é utilizado quando o TypeScript não sabe qual é a tipagem em um determinado objeto.

Para contornarmos isso, podemos criar um type informando quais são as propriedades desse objeto.

 ```ts
type UserResponse = {
    id: number;
    name: string;
    avatar: string;
}

let userResponse = {} as UserResponse;

```

## Objetos 

```ts

type Point = {  
    x: number;  //declarar o tipo de dado para as propriedades;
    y: number;
}

function printCoord(points: Point) { //preferencia criar tipos começando com letra maiuscula
    console.log(`O eixo x é: ${points.x}`)
    console.log(`O eixo y é: ${points.y}`)
}

printCoord({x: 101, y: 50})

```

Resultado do log:

```

Resultado do log:

[LOG]: "O eixo x é: 101"
------------------------
[LOG]: "O eixo y é: 50"

```

## Opcional

Para informamos que uma propriedade é opcional inserimos o sinal de ?

```ts 

type User = {
    name: string;
    email: string;
    age: number;
    isAdmin?: boolean; // isAdmin não será obrigatória na sua declaração
}

let newUser: User = {
    name: 'João',
    email: 'joao@email.com',
    age: 18
}

```