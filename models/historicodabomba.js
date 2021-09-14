'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HistoricodaBomba extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      HistoricodaBomba.belongsTo(models.Bomba);
    }
  };
  HistoricodaBomba.init({
    BombaId: DataTypes.INTEGER,
    nivel: DataTypes.FLOAT,
    data: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'HistoricodaBomba',
  });
  return HistoricodaBomba;
};