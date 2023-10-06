//Los modelos son los encargados de definir la estructura de la tabla en la base de datos
//y de realizar las consultas a la base de datos.   
// Este es el modelo de la base de datos para poder interactuar con los usuarios

//ORM: Object Relational Mapping

const {Sequelize, Model, DataTypes} = require('sequelize');


//CREDENCIALES DE LA BASE DE DATOS
const nameDataBase = process.env.DB_NAME || 'test';
const userAdminDataBase = process.env.user_admin || 'root';
const passwordAdminDataBase = process.env.password_admin || '';
const hostDataBase = process.env.host || 'localhost';
const portDataBase = process.env.port || 3307;

//CONEXION A LA BASE DE DATOS
const sequelize = new Sequelize(nameDataBase, userAdminDataBase, passwordAdminDataBase, {
    host: hostDataBase, //DEBIDO A QUE LA BASE DE DATOS CORRE EN MI PROPIA COMPUTADORA
    dialect: 'mysql',
    port: portDataBase
});

//PROBANDO LA CONEXION A LA BASE DE DATOS
async function testConnection() {
        try {
            await  sequelize.authenticate();
            // la conexion con la base de datos de nombre: ${nameDataBase} ha sido exitosa
            console.log(`The conection with the data base: ${nameDataBase} has been successful.`);
        }
        catch(error) {
            console.error('Unable to connect to the database:', error); 
        }
}

//Es necesario que ya exista la base de datos para que funcione la conexión.
testConnection();




//MODELO DE LA TABLA empleado
class Employeed extends Model {}

Employeed.init({
    employeeID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Documento: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    Nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },

    Apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },

    Telefono: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    EMail: {
        type: DataTypes.STRING,
        allowNull: false
    },

    Direccion: {
        type: DataTypes.STRING,
        allowNull: false
    },

    Genero: {
        type: DataTypes.STRING,
        allowNull: false
    },
})