const { DataTypes } = require("sequelize");
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
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                is: /\S+@\S+\.\S+/,
            },
        },
    },
    {
        timestamps: true,
        tableName: "user",
    }
);

module.exports = User;