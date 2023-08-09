const { Bootcamp } = require("../models");

const findAllBootcamps = async () => {
  try {
    const bootcamps = await Bootcamp.findAll();
    console.log(
      `Se han encontrado los siguientes bootcamps ${JSON.stringify(bootcamps, null, 4)}`
    );
    return bootcamps;
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

const findBootcampById = async (bootcampId) => {
  try {
    const boot = await Bootcamp.findByPk(bootcampId);
    console.log(
      `Se ha encontrado el bootcamp ${JSON.stringify(boot, null, 4)}`
    );
    return boot;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const addUserAtBootcamp = async (content, condition) => {
  try {
    const boot = await Bootcamp.update(content, condition);
    console.log(
      `Se ha agregado estudiante al bootcamp ${JSON.stringify(boot, null, 4)}`
    );
    return boot;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


module.exports = {
  findAllBootcamps,
  createBootcamp,
  findBootcampById,
  addUserAtBootcamp,
};
