const bodyParser = require('body-parser')
const pessoas = require('./pessoasroutes')
const niveis = require('./niveisroutes')
const turmas = require('./turmasroutes')

 module.exports = app => {
    app.use(bodyParser.json())
    app.use(pessoas)
    app.use(niveis)
    app.use(turmas)

 }