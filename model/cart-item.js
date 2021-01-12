const Sequelize = require('sequelize');
const sequelize = require('../helper/db');

const Cart = sequelize.define('cartItem',{
    id : {
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    quantity:Sequelize.INTEGER
})

module.exports = Cart;