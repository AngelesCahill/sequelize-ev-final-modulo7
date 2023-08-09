const express = require("express");
const app = express();

require("dotenv").config();

const {
  createUser,
  findUserById,
  findAllUsers,
  updateUserById,
  deleteUserById,
} = require("./app/controllers/user.controller");
const {
  createBootcamp,
  findAllBootcamps,
  findBootcampById,
  addUserAtBootcamp,
} = require("./app/controllers/bootcamp.controller");

const PORT = process.env.PORT || 3000;

// http://localhost:3000/user
app.get("/user", async (req, res) => {
  try {
    const usuarios = await findAllUsers();
    res.status(200).json({
      message: `se encontraron ${usuarios.length} usuarios`,
      users: usuarios,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// http://localhost:3000/user/create/Angeles/Cahill/angeles.cahill@gmail.com
app.get("/user/create/:firstname/:lastname/:email", async (req, res) => {
  const firstname = req.params.firstname;
  const lastname = req.params.lastname;
  const email = req.params.email;
  try {
    const usuario = await createUser({
      firstname,
      lastname,
      email,
    });
    res.status(200).json({
      message: `usuario ${usuario.firstname} ${usuario.lastname} fue creado con éxito`,
      user: usuario,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// http://localhost:3000/user/findById/5
app.get("/user/findById/:id", async (req, res) => {
  const id = Number(req.params.id);
  try {
    const usuario = await findUserById(id);
    if (usuario) {
      res.status(200).json({
        message: `usuario ${usuario.firstname} fue encontrado con éxito`,
        user: usuario,
      });
    } else {
      res.status(500).json({
        message: `usuario id ${id} no fue encontrado`,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// http://localhost:3000/update/id/5/nombre/Maria de los angeles/apellido/Cahill/email/angeles.cahill@khipu.com
app.get(
  "/update/id/:id/nombre/:nombre/apellido/:apellido/email/:email",
  async (req, res) => {
    const id = Number(req.params.id);
    const firstname = req.params.nombre;
    const lastname = req.params.apellido;
    const email = req.params.email;
    try {
      const user = await updateUserById(
        {
          firstname,
          lastname,
          email,
        },
        {
          where: { id: id }
        }
      );
      res.status(201).json({
          message: `usuario id ${id} fue actualizado con éxito`
        });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);

// http://localhost:3000/deleteUserById/5
app.get('/deleteUserById/:id', async (req, res) => {
    const id = Number(req.params.id);
    try {
        const usuario = await deleteUserById({
          where: { id },
        });
        res.status(201).json({ 
            message: `usuario id ${id} fue borrado con éxito`
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// http://localhost:3000/bootcamps
app.get("/bootcamps", async (req, res) => {
  try {
    const bootcamps = await findAllBootcamps();
    res.status(200).json({
      message: `se encontraron ${bootcamps.length} Bootcamps`,
      bootcamps: bootcamps,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// http://localhost:3000/bootcamp/create/Front End VueJs/10/Realización de proyecto front end
app.get("/bootcamp/create/:title/:cue/:description", async (req, res) => {
  const title= req.params.title;
  const cue = req.params.cue;
  const description = req.params.description;
  try {
    const boot = await createBootcamp({
      title,
      cue,
      description,
    });
    res.status(200).json({
      message: `El bootcamp ${boot.title} fue creado con éxito`,
      bootcamp: boot,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// http://localhost:3000/bootcamp/findBootcamp/1
app.get("/bootcamp/findBootcamp/:id", async (req, res) => {
  const id = Number(req.params.id);
  try {
    const boot = await findBootcampById(id);
    if (boot) {
      res.status(200).json({
        message: `Bootcamp:  ${boot.title} fue encontrado con éxito`,
        user: boot,
      });
    } else {
      res.status(500).json({
        message: `usuario id ${id} no fue encontrado`,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

addUserAtBootcamp;
// http://localhost:3000/addUser/1
app.get(
  "/update/id/:id/nombre/:nombre/apellido/:apellido/email/:email",
  async (req, res) => {
    const id = Number(req.params.id);
    const firstname = req.params.nombre;
    const lastname = req.params.apellido;
    const email = req.params.email;
    try {
      const user = await updateUserById(
        {
          firstname,
          lastname,
          email,
        },
        {
          where: { id: id }
        }
      );
      res.status(201).json({
          message: `usuario id ${id} fue actualizado con éxito`
        });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);


app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
