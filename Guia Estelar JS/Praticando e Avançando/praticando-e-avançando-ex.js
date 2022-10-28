// 1. declare uma variável de nome weight

let weight = 62.4

// 2. Que tipo de dado é a variável acima?

console.log(typeof weight)

/* 
    3. Declare uma variável e atribua valores para cada um dos dados:
    * name: String
    * age: Number (integer)
    * weight: Number (float)
    * isSubscribe: Boolean
*/

let student = {
    name: "Lucas",
    age: 26,
    weight: 62.5,
    isSubscribe: true,
}

let john = {
    name: "John",
    age: 32,
    weight: 82.5,
    isSubscribe: false,
}

let students = [student, john]

console.log(typeof student)
console.log(students[1])

console.log(`O ${student.name} tem ${student.age} anos e pesa ${student.weight} kg`)
console.log(`O ${john.name} tem ${john.age} anos e pesa ${john.weight} kg`)

