//Contiene el código principal de la aplicación con la configuración de Express, middleware y rutas.

const express= require("express");
const app = express();

//vamos a requerir las rutas y acceder a las carpetas:
const horaMiddleware = require("./middlewares/horaMiddleware");
const validarHora = require("./middlewares/validarHora");
const endroute = require("./routes/endroute");
const index = require("./routes/index");
//app.use(horaMiddleware);
//app.use(validarHora);
//app.use("/", endroute);
//app.use("/", index);

app.listen(3000, () => {
    console.log("el servidor está escuchando en el puerto 3000");
  });
  