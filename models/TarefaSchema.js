const mongoose = require('mongoose')

const TarefaSchema = new mongoose.Schema({
    titulo_tarefa: String,
    descricao_tarefa: String,
},{
    timestamps: true
})

const Tarefa = mongoose.model('Tarefas', TarefaSchema)
module.exports = Tarefa