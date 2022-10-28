/*
    function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
    
*/

function person(name){
    this.name = name
    this.walk = function() {
        return this.name+" está andando"
    }
}

const nome1 = new person("Lucas")
const nome2 = new person("Mayk")

console.log(nome1.walk())
console.log(nome2.walk())