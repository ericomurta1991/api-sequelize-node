const { Router } = require('express');
const TurmaController = require("../controllers/TurmaController.js")

const router = Router()

router.get('/turmas', TurmaController.pegarTodasAsTurmas)
router.get('/turmas/:id', TurmaController.UmaTurma)
router.post('/turmas', TurmaController.criarTurma)
router.put('/turmas/:id', TurmaController.atualizarTurma)
router.delete('/turmas/:id', TurmaController.apagarTurma)

module.exports = router;