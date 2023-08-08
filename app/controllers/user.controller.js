//USER
// http://localhost:3000/create/nombre/Angeles/apellido/Cahill/email/angeles.cahill@gmail.com
app.get(
  "/create/nombre/:nombre/apellido/:apellido/email/:email",
  async (req, res) => {
    const firstname = req.params.nombre;
    const lastname = req.params.apellido;
    const email = req.params.email;
    try {
      await User.create({
        firstname,
        lastname,
        email,
      });
      res
        .status(201)
        .json({ message: `usuario ${firstname} fue creado con éxito` });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);

// http://localhost:3000/findById/1
app.get("/findById/:id", async (req, res) => {
  const id = Number(req.params.id);
  try {
    const usuario = await User.findByPk(id);
    res.status(201).json({
      message: `usuario ${usuario.firstname} fue encontrado con éxito`,
      user: usuario,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// http://localhost:3000/findByName/Lucas
app.get("/findByName/:nombre", async (req, res) => {
  const name = req.params.nombre;
  try {
    const usuario = await User.findOne({
      where: { name },
    });
    res.status(201).json({
      message: `El usuario llamado ${usuario.name} fue encontrado con éxito`,
      user: usuario,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// http://localhost:3000/findAll
app.get("/findAll", async (req, res) => {
  try {
    const usuarios = await User.findAll({
      order: [["id", "ASC"]],
      raw: true,
    });
    res.status(201).json({
      message: `se encontraron ${usuarios.length} usuarios`,
      users: usuarios,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// http://localhost:3000/update/id/1/nombre/Mathew/apellido/Days/email/mathew.days@gmail.com
app.get(
  "/update/id/:id/nombre/:nombre/apellido/:apellido/email/:email",
  async (req, res) => {
    const id = Number(req.params.id);
    const firstname = req.params.nombre;
    const lastname = req.params.apellido;
    const email = req.params.email;
    try {
      await User.update(
        {
          firstname,
          lastname,
          email,
        },
        {
          where: { id },
        }
      );
      res
        .status(201)
        .json({ message: `usuario id ${id} fue actualizado con éxito` });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);

// http://localhost:3000/deleteById/5
app.get("/deleteById/:id", async (req, res) => {
  const id = Number(req.params.id);
  try {
    await User.destroy({
      where: { id },
    });
    res.status(201).json({
      message: `usuario id ${id} fue borrado con éxito`,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// http://localhost:3000/deleteAll
app.get("/deleteAll", async (req, res) => {
  const id = Number(req.params.id);
  try {
    const borrados = await User.destroy({
      truncate: true,
    });
    console.log(borrados);
    res.status(201).json({
      message: `todos los usuarios fueron borrados`,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//BOOTCAMP
// http://localhost:3000/create/title/Vuejs/cue/8/description/framework
app.get(
  "/create/title/:title/cue/:cue/description/:description",
  async (req, res) => {
    const title = req.params.title;
    const cue = req.params.cue;
    const description = req.params.description;
    try {
      await Bootcamp.create({
        title,
        cue,
        description,
      });
      res
        .status(201)
        .json({ message: `Bootcamp ${title} fue creado con éxito` });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);

// http://localhost:3000/findById/1
app.get("/findById/:id", async (req, res) => {
  const id = Number(req.params.id);
  try {
    const bootcamp = await Bootcamp.findByPk(id);
    res.status(201).json({
      message: `Bootcamp ${bootcamp.title} fue encontrado con éxito`,
      bootcamp: bootcamp,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// http://localhost:3000/findByName/Bootcamp Desarrollo Web Full Stack
app.get("/findByName/:nombre", async (req, res) => {
  const name = req.params.nombre;
  try {
    const bootcamp = await Bootcamp.findOne({
      where: { name },
    });
    res.status(201).json({
      message: `bootcamp ${bootcamp.title} fue encontrado con éxito`,
      bootcamp: bootcamp,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// http://localhost:3000/findAll
app.get("/findAll", async (req, res) => {
  try {
    const bootcamps = await Bootcamp.findAll({
      order: [["id", "ASC"]],
      raw: true,
    });
    res.status(201).json({
      message: `se encontraron ${bootcamps.length} bootcamps`,
      bootcamps: bootcamps,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// http://localhost:3000/update/id/4/title/Vuejs/cue/10/description/A great frameword
app.get(
  "/update/id/:id/title/:title/cue/:cue/description/:description",
  async (req, res) => {
    const id = Number(req.params.id);
    const title = req.params.title;
    const cue = req.params.cue;
    const description = req.params.description;
    try {
      await Bootcamp.update(
        {
          title,
          cue,
          description,
        },
        {
          where: { id },
        }
      );
      res
        .status(201)
        .json({
          message: `El bootcamp con id ${id} fue actualizado con éxito`,
        });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);

// http://localhost:3000/deleteById/4
app.get("/deleteById/:id", async (req, res) => {
  const id = Number(req.params.id);
  try {
    await User.destroy({
      where: { id },
    });
    res.status(201).json({
      message: `El bootcamp con id ${id} fue borrado con éxito`,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// http://localhost:3000/deleteAll
app.get("/deleteAll", async (req, res) => {
  const id = Number(req.params.id);
  try {
    const borrados = await User.destroy({
      truncate: true,
    });
    console.log(borrados);
    res.status(201).json({
      message: `todos los bootcamps fueron borrados`,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
