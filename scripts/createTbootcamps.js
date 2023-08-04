const Bootcamp = require("../model/bootcamp");
const sequelize = require("../config/db.config");

(async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("Nueva Tabla bootcamp ha sido creada");
  } catch (error) {
    console.error(error);
  } finally {
    await sequelize.close();
  }
})();
