
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
function mostrarMensaje (){

    if (nuevoFormatoHora>="24:00" && nuevoFormatoHora<"12:00"){ 
        console.log("¡Aún no son las 12 de la mañana!")
        texto= "¡Aún no es la hora de entrar, espera a las 12 de la mañana!"
    }else{
        console.log("¡Aún no son las 12 de la mañana!")
        texto= "¡Ya puedes entrar!" //pte acceso /endroute
    }
}
mostrarMensaje ()


   // Si accedemos directamente a la ruta `/endroute`, nos devolverá el mismo error y misma ruta que si pulsaramos el botón 