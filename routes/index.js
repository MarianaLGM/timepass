
// Módulo de ruta para la página principal.
/*1. La primera ruta que debe salir nada más inicializar el servidor será `index.js`

En esta ruta habrá lo siguiente:
- Un texto de bienvenida y la hora actual
- Un botón que enlace `/endroute`
- Al clickar tendrá que validar con el middleware `validarHora.js`si la hora es correcta para poder continuar. 
*/

const express=require("express")
const router=express.Router();//para poder manejar las rutas

router.get("/", (req, res) => {
    //Solo se podrá acceder a `/endroute` si la hora está entre las 12h de la mañana y las 24h.
    //Si es antes de las 12 al clickar en el botón nos saldrá un mensaje que diga algo como "Aún no son las 12 de la mañana"
    // Si accedemos directamente a la ruta `/endroute`, nos devolverá el mismo error y misma ruta que si pulsaramos el botón 
    res.send(`
        <a href="/">index</a>${req.path}
        <!DOCTYPE html>
        <html>
        <head>
        <title>Index</title>
        </head>
        <body>
        <h1>BIENVENIDO</h1> 
        <h2>La hora actual es ${req.dateType}</h2>
        <h2>Entrar</h2><a href="/endroute">endroute</a>
        </body>
        </html>
        `);
    });
    
  router.use((req, res) => {
    res.status(400).send(`<h1>página no encontrada ${req.dateType}</h1>`);
  });
  
  module.exports= router;