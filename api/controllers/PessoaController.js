const database = require('../models')

class PessoaController {
    static async pegartTodasAsPessoas(req, res){
        try{
            const todasAsPessoas = await database.Pessoas.findAll()
            return res.status(200).json(todasAsPessoas)
        }catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async pegaUmaPessoa(req, res){
        const { id } = req.params;
        try{
            const umaPessoa = await database.Pessoas.findOne( {where: {id: Number(id) }})
            return res.status(200).json(umaPessoa);
        }catch(error){ 
            return res.status(500).json(error.message);
        }
    }
    static async criarPessoa(req, res){
        const novaPessoa = req.body
        try{
            const novaPessoasCriada = await database.Pessoas.create(novaPessoa)
            return res.status(200).json(novaPessoasCriada)
        } catch(error){
            return res.status(500).json(error.message);
        }
    }
    static async atualizaPessoa(req, res){
        const {id} = req.params;
        const novaInfos = req.body;
        try{
            await database.Pessoas.update(novaInfos, {where: { id: Number(id) }})
            const pessoaAtualizada = await database.Pessoas.findOne({ where: { id: Number(id)}})
            return res.status(200).json(pessoaAtualizada)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
    static async apagarPessoa(req, res){
        const {id} = req.params;
        try{
            await database.Pessoas.destroy({ where: { id: Number(id)}})
            return res.status(200).json({ mensagem: `id ${id} deletado`})
        }catch (error){
            res.status(500).json(error.message)
        }
    }
}

module.exports = PessoaController