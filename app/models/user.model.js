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
            validate: {
                notNull: {
                    msg: "Name es requerido",
                },
                notEmpty: {
                    msg: "Debe ingresar un Name",
                },
            },
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "El lastName es requerido",
                },
                notEmpty: {
                    msg: "Debe ingresar un lastName",
                },
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                is: /\S+@\S+\.\S+/,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                min: {
                    args: [8],
                    msg: "Se requiere un mínimo de 8 caracteres para la contraseña (password)",
                },
                notNull: {
                    msg: "Password es requerido",
                },
                notEmpty: {
                    msg: "Debe ingresar un password",
                },
            },
        },
    }, {
        timestamps: true,
        tableName: "user",
    }
);

module.exports = User;