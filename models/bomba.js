'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bomba extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Bomba.hasMany(models.HistoricodaBomba);
    }
  };
  Bomba.init({
    estado: DataTypes.INTEGER,
    local: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Bomba',
  });
  return Bomba;
};