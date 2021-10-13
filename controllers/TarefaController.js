const Tarefa = require('../models/TarefaSchema')

module.exports = {
    async find(req,res){
        const task = await Tarefa.find()
        return res.json(task)
    },

    async create(req,res){
        try{
            const {titulo_tarefa, descricao_tarefa} = req.body
    
            let data = {titulo_tarefa, descricao_tarefa}
    
            let task = await Tarefa.create(data)
            return res.status(200).json(task)
        }
        catch(error){
            console.log("Erro ao criar tarefa "+error)
        }
    },

    async deletar(req,res){
            const {_id} = req.params
            let task = await Tarefa.findOneAndDelete({_id})
            return res.status(200).json(task)
       
    },

    async get(req,res){
        const {_id} = req.params
        let task = await Tarefa.findOne({_id})
        return res.status(200).json(task)
    },

    async edit(req,res){
        const {_id} = req.params
        const {titulo_tarefa,descricao_tarefa} = req.body
        const data = {_id,titulo_tarefa,descricao_tarefa}
        let task = await Tarefa.findOneAndUpdate({_id},data,{new: true})
        return res.status(200).json(task)
    }
}