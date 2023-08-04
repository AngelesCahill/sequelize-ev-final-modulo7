const {
    DataTypes
} = require("sequelize");
const sequelize = require("../config/db.config");

// Creación de la tabla user
const User = sequelize.define(
    "user", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /\S+@\S+\.\S+/,
            },
        },
    },
    {
        timestamps: true,
        paranoid: false,
        underscored: true,
        freezeTableName: true,
        tableName: "user",
    }
);

module.exports = User;