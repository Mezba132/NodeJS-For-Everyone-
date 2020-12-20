const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodejsdb', 'root', 'admin123', {
    dialect : 'mysql', host : 'localhost'
})

module.exports = sequelize;