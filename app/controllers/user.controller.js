const { User } = require("../models");


const findAllUsers = async () => {
  try {
    const usuarios = User.findAll();
    console.log(
      `Se han encontrado los usuarios ${JSON.stringify(usuarios, null, 4)}`
    );
    return usuarios;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const createUser = async (user) => {
  try {
    const usuario = await User.create({
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email

    });
    console.log(`Se ha creado el usuario ${JSON.stringify(usuario, null, 4)}`);
    return usuario;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const findUserById = async (userId) => {
  try {
    const usuario = await User.findByPk(userId);
    console.log(
      `Se ha encontrado el usuario ${JSON.stringify(usuario, null, 4)}`
    );
    return usuario;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const updateUserById = async (content, condition) => {
  try {
    const usuario = await User.update(content, condition);
    console.log(
      `Se ha actualizado el usuario ${JSON.stringify(usuario, null, 4)}`
    );
    return usuario;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const deleteUserById = async (userId) => {
  try {
    const usuario = await User.destroy(userId);
    console.log(
      `Se ha eliminado el usuario ${JSON.stringify(usuario, null, 4)}`
    );
    return usuario;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = {
  findAllUsers,
  createUser,
  findUserById,
  updateUserById,
  deleteUserById,
};