//quantos elementos na array
console.log([
    "a",
    {type: "array"},
    function() {return 0},
].length)

// acessar um elemento da array
console.log([
    "a",
    {type: "array"},
    function() {return 0},
][1])

// acessar um elemento da array e rodar o elemento
console.log([
    "a",
    {type: "array"},
    function() {return 'Retornar'},
][2]())

// acessar um elemento da array e verificar o tipo do dado
console.log([
    "a",
    {type: "array"},
    function() {return 0},
][1].type)