const sequelize = require('sequelize');

const connection = new sequelize('projetoperguntas', 'root', 'hashiba', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;