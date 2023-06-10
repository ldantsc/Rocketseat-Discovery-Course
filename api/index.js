const express = require('express')
//inicializando express
const app = express()
//.list ouvindo a porta 8080
app.listen('3000')
                    //requisição, resposta
//app.route('/').get( (req,res) => res.send("Hello") ) 
//responta sendo enviada através do metodo get para a rota principal '/' com a msg Hello

//middleware
app.use(express.json())


app.route('/').post( (req,res) => res.send(req.body) )