const { Router } = require('express')
const PessoaController = require("../controllers/PessoaController.js");


const router = Router()

router.get('/pessoas', PessoaController.pegartTodasAsPessoas)
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa)
router.post('/pessoas', PessoaController.criarPessoa)
router.put('/pessoas/:id', PessoaController.atualizaPessoa)
router.delete('/pessoas/:id', PessoaController.apagarPessoa)

module.exports = router;