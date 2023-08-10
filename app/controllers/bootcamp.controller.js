const { User, Bootcamp } = require("../models");

const findAllBootcamps = async () => {
  try {
  const boot = Bootcamp.findAll({
      include: [
        {
          model: User,
          as: "users",
          attributes: ["id", "firstname"],
          through: {
            attributes: [],
          },
        },
      ],
    });
    console.log(
      `Se han encontrado los bootcamp ${JSON.stringify(boot, null, 4)}`
    );
    return boot;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const createBootcamp = async (bootcamps) => {
  try {
    const bootcamp = await Bootcamp.create({
      title: bootcamps.title,
      cue: bootcamps.cue,
      description: bootcamps.description,
    });
    console.log(`Se ha creado el usuario ${JSON.stringify(bootcamp, null, 4)}`);
    return bootcamp;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const findUserBootcampById = async (bootcampId) => {
  try {
    const boot = await Bootcamp.findByPk(bootcampId, {
      include: [
        {
          model: User,
          as: "users",
          attributes: ["id", "firstname"],
          through: {
            attributes: [],
          },
        },
      ],
    });
    console.log(
      `Se ha encontrado el boot ${JSON.stringify(boot, null, 4)}`
    );
    return boot;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


const addUserToBootcamp = async (bootcampid, userid) => {
  try {
    const bootcamp = await Bootcamp.findByPk(bootcampid);
    if (!bootcamp) {
      console.log(`No se encontró proyecto con id ${bootcampid}`);
      return null;
    }
    const usuario = await User.findByPk(userid);
    if (!usuario) {
      console.log(`No se encontró usuario con id ${userid}`);
      return null;
    }
    await bootcamp.addUser(usuario);
    console.log(
      `Agredado el usuario id ${usuario.id} al proyecto con id ${bootcamp.id}`
    );
    return bootcamp;
  } catch (error) {
    console.error(error);
    throw error;
  }
};




module.exports = {
  findAllBootcamps,
  createBootcamp,
  findUserBootcampById,
  addUserToBootcamp,
};