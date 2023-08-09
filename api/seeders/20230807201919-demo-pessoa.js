'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Pessoas', [{
      nome: 'Ana Souza',
      ativo: true,
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date()
      //isBetaMember: false
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
    
  }
};
