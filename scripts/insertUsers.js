const User = require("../model/user");
const sequelize = require("../config/db.config");

const users = [
    {
        firstname: "Mateo",
        lastname: "Díaz",
        email: "mateo.diaz@correo.com"
    },
    {
        firstname: "Santiago",
        lastname: "Mejías",
        email: "santiago.mejias@correo.com"
    },
    {
        firstname: "Lucas",
        lastname: "Rojas",
        email: "lucas.rojas@correo.com"
    },
    {
        firstname: "Facundo",
        lastname: "Fernandez",
        email: "facundo.fernandez@correo.com"
    }
];

(async () => {
    try {
        await user.bulkCreate(users, {
            validate: true
        });
    } catch (error) {
        console.error(error);
    } finally {
        await sequelize.close();
    }
})();