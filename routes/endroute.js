
// Módulo de ruta para la página final.

const express=require("express")
const router=express.Router();//para poder manejar las rutas


router.get("/endroute", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
        <title>Endroute</title>
        </head>
        <body>
        <h1>Ruta Final</h1> 
        <h2>¡Bienvenido a la ruta final!</h2>
        </body>
        </html>  
        `);
  });

  module.exports= router;