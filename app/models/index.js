// Para importar el modelo completo
const User = require("./user.model");
const Bootcamp = require("./Bootcamp");

User.hasMany(Bootcamp, {
  as: "bootcamp",
});

Bootcamp.belongsTo(User, {
  foreignKey: "userId",
  as: "idUser",
});
Bootcamp.hasMany(User, {
  as: "user",
});

User.belongsTo(Bootcamp, {
  foreignKey: "bootcampId",
  as: "idBootcamp",
});

module.exports = {
  User,
  Bootcamp,
};
