'use strict';

const TABLE_NAME = 'phones';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      TABLE_NAME,
      {
        namespace_id: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        capacityAvailable: {
          type: Sequelize.ARRAY(Sequelize.STRING),
          allowNull: false,
        },
        capacity: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        price_regular: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        price_discount: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        colors_avaliable: {
          type: Sequelize.ARRAY(Sequelize.STRING),
          allowNull: false,
        },
        color: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        images: {
          type: Sequelize.ARRAY(Sequelize.STRING),
          allowNull: false,
        },
        description: {
          type: Sequelize.JSON,
          allowNull: false,
        },
        screen: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        resolution: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        proccesor: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        ram: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        camera: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        zoom: {
          type: Sequelize.ARRAY(Sequelize.STRING),
          allowNull: false,
        },
        cell: {
          type: Sequelize.ARRAY(Sequelize.STRING),
          allowNull: false,
        },
      }
    );
  },

  async down (queryInterface) {
    await queryInterface.dropTable(TABLE_NAME);
  }
};
