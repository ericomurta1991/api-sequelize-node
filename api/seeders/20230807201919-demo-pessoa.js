'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Pessoas', [{
      nome: 'Ana Souza',
      ativo: true,
      email: 'ana@ana.com',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        nome: 'Marcos Cintra',
        ativo: true,
        email: 'marcos@marcos.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Esteves Furtado',
        ativo: true,
        email: 'furtado@esteves.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {})
  }
};
