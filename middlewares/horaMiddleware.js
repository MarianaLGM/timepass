
/* Middleware para obtener la hora actual. De aquí sacaremos la hora. Recuerda que hay que pasarla como una req 
 y con js podemos obtener la fecha con new Date()*/

const horaMiddleware= (req, res, next) =>{
    const now=new Date();
    const hours= now.getHours();
    const minutes= now.getMinutes(); 
    const formattedTime= `${hours}:${minutes}`;
    req.actualHours=`La hora actual es: ${formattedTime}`
    next()
    console.log(formattedTime)
};


module.exports=horaMiddleware



