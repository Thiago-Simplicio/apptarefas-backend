const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/AppTarefas',{
    useNewUrlParser: true
}).then(function(){
    console.log("Srvidor conectado ao MongoDB")
}).catch(function(error){
    console.log("Erro ao se conectar ao MongoDB "+error)
})

const rotas = require('./routes/rotas')
app.use('/', rotas)

const port = process.env.PORT || 3000
app.listen(port, function(){
    console.log("Servidor iniciado na porta http://localhost:8081")
})