const express = require('express');
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;


const db = require('./app/models')
const run = async () => {
}
// db.sequelize.sync()
db.sequelize.sync({ force: true })
    .then(() => {
    console.log('Eliminando y resincronizando la base de datos.')
    run()
});
    
app.listen(PORT, () => {console.log(`app listening on port ${PORT}`)});