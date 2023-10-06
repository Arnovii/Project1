
const router = require('express').Router();

//Imprimir todos los usuarios
router.get('/users', (req, res) => {
    res.send('HERE IS ALL THE USERS...');
});


//Insetar un usuario
router.post('/users', (req, res) => {

});





//Creeria que aquí solo se establecen las rutas para consumir API, no rutas de navegación por parte de cliente.
// router.get("/home", (req, res) => {
//     res.send("HERE IS THE HOME PAGE...");
// });



module.exports = router;