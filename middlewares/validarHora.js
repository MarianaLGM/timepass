
// Aquí estará la lógica de si accedemos a la siguiente ruta

//convirtiendo el formato hh:mm:ss en hh:mm y en string para poder comparar con las "franjas horarias"
let formatoHoraMinutos = new Date();
let nuevoFormatoHora = formatoHoraMinutos.toLocaleString([], {
      hour: "2-digit",
      minute: "2-digit",
      
});
console.log(nuevoFormatoHora)

//Solo se podrá acceder a `/endroute` si la hora está entre las 12h de la mañana y las 24h.
//Si es antes de las 12 al clickar en el botón nos saldrá un mensaje que diga algo como "Aún no son las 12 de la mañana"
const validarHora= (req, res, next)=>{

   if (nuevoFormatoHora>="12:00" && nuevoFormatoHora<="24:00" ){ 
        console.log("perfecto, es la hora")
        next() 
    }else{
        res.locals.mensaje= `Aún tienes que esperar hasta las 12:00 para entrar`
        console.log("Aún no es la hora, espera hasta las 12:00 para entrar")
        res.redirect('/?mensaje=' + encodeURIComponent(res.locals.mensaje));
   }
};

module.exports=validarHora

