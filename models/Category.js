const { Model, Sequelize } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model { }

Category.init(
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
    category_name: {
      type: Sequelize.toString,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
