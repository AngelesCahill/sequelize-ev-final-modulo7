const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

// Creación de la tabla bootcamp
const Bootcamp = sequelize.define(
  "bootcamp",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cue: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 5,
        max: 20,
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: false,
    underscored: true,
    freezeTableName: true,
    tableName: "bootcamp",
  }
);

module.exports = Bootcamp;
