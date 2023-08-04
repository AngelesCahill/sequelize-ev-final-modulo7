const {
    DataTypes
} = require("sequelize");
const sequelize = require("../config/db.config");

// Creación de la tabla user_bootcamp
const user_bootcamp = sequelize.define(
    "user_bootcamp", {
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: user,
                key: "id",
            },
        },
    },
    {
        bootcampId: {
            type: DataTypes.INTEGER,
            references: {
                model: bootcamp,
                key: "id",
            },
        },
    },
    {
        timestamps: true,
        paranoid: false,
        underscored: true,
        freezeTableName: true,
        tableName: "user_bootcamp",
    }
);
module.exports = user_bootcamp;