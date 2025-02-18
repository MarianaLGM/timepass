
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
    console.log(req.query)
    res.send (`
        <!DOCTYPE html>
        <html>
        <head>
        <title>Index</title>
        </head>
        <body>
        <h1>BIENVENIDO</h1> 
        <h2>${req.actualHours}</h2>
        <button><a href="/endroute">Entrar</a></button>
        <h2>${req.query.mensaje?req.query.mensaje:""}</h2>
        </body>
        </html>
        `);
    
    });
    
  module.exports= router;

