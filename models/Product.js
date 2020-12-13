// import important parts of sequelize library
const { Model, Sequelize } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      //define id colu,n
      type: Sequelize.INTEGER,
      //make sure input is here
      allowNull: false,
      //instruct that this is the primary key
      primaryKey: true,
      //turn on auto increment
      autoIncrement: true
    },
    catergory_name: {
      type: Sequelize.toString,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
