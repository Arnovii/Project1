const app = require('./app/app.js');
//comando

















//process nos permite acceder a las variables de entorno
const PORT = process.env.PORT || 3000;
//app.listen() es un método de express que crea un servidor y lo pone a escuchar en el puerto que le indiquemos
app.listen(PORT, () => {
    console.log(`App listenin at http://localhost:${PORT}`);
});