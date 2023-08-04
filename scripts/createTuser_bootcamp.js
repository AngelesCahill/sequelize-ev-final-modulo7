const user_bootcamp = require("../model/user");
const sequelize = require("../config/db.config");

(async () => {
    try {
        await sequelize.sync({
            force: true
        });
        console.log("Nueva Tabla user ha sido creada");
    } catch (error) {
        console.error(error);
    } finally {
        await sequelize.close();
    }
})();