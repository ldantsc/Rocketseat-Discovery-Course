// chamar o módulo express

const express = require('express')

// instanciando o express e guardando na variavel app

const app = express()

// chamando o set, uma função que existe dentro do js... passando 2 argumentos
// view engine 

app.set("view engine", "ejs")

// criando uma rota 

app.get("/", function (req,res){
    // criando uma array com objetos, items vai ser passado para o index
    const items = [
        {
            title: "D",
            message: "esenvolver aplicações/serviços de forma fácil"
        },
        {
            title: "E",
            message: "JS usa JavaScript para renderizar HTML"
        },
        {
            title: "M",
            message: "uito facil de usar"
        },
        {
            title: "A",
            message: "morzinho"
        },
        {
            title: "I",
            message: "nstall EJS"
        },
        {
            title: "S",
            message: "intaxe simples"
        }
    ];
    const subtitle = "Uma linguagem de modelagem para criação de página HTML"
    // passando um arquivo (pages/index) para renderizar, e um objeto
    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle
    });
})

// a rota "/sobre" 
// renderizando o arquivo about.ejs

app.get("/sobre", function (req,res){
    res.render("pages/about");
})

// função listen fica ouvindo uma porta

app.listen(8080)
console.log("Server on");