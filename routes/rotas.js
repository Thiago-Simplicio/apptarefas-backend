const express = require('express')
const rotas = express.Router() 

const Tarefa = require('../controllers/TarefaController')

rotas.get('/tarefas', Tarefa.find)
rotas.post('/tarefa-create', Tarefa.create)
rotas.delete('/tarefa-delete/:_id', Tarefa.deletar)
rotas.get('/edit/:_id', Tarefa.get)
rotas.put('/edit-tarefa/:_id', Tarefa.edit)

module.exports = rotas