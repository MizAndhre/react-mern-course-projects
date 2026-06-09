//importar express
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { databaseConnection } = require('./database/config');

// rutas
const auth = require('./routes/auth');
const events = require('./routes/events');

//Crear el servidor de Express
const app = express();

//Base de Datos
databaseConnection();

//CORS
app.use(cors());

// Directorio Publico
app.use(express.static('public'));

// Lectura y Parseo del body
app.use(express.json());

//Rutas
//TODO: auth // crear, login, renew
// app.use('/api/auth', require('./routes/auth'));
app.use('/api/auth', auth);
app.use('/api/events', events)

//TODO: CRUD // Eventos

//Escuchar peticiones
app.listen(process.env.PORT, () => {
	console.log('Servidor en', process.env.PORT);
});
