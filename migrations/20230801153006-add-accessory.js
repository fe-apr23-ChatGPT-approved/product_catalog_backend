'use strict';

const TABLE_NAME = 'accessories';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(TABLE_NAME, {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      namespaceId: {
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
      priceRegular: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      priceDiscount: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      colorsAvailable: {
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
      processor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ram: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      camera: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      zoom: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true,
      },
      cell: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable(TABLE_NAME);
  },
};
