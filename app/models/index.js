// Para importar el modelo completo
const User = require("./user.model");
const Bootcamp = require("./bootcamp.model");



Bootcamp.belongsToMany(User, {
  through: "user_bootcamp",
  foreignKey: "bootcampId",
  as: "bootcamps"
});

User.belongsToMany(Bootcamp, {
  through: "user_bootcamp",
  foreignKey: "bootcampId",
  as: "users"
});

module.exports = {
  User,
  Bootcamp,
};
