const cors = require('cors')

const express = require ('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const flash = require ('connect-flash')
const session = require ('express-session')
const mysqlstore = require('express-mysql-session')
const passport = require('passport')

const { database } = require('./backend/keys.js')

const app = express()
app.use(cors())
require ('./backend/lib/passport.js')

/**Configuraciones */
app.set ('port', process.env.PORT || 3001);

app.use(flash())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(express.static(path.resolve(__dirname, './client/build')));
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build', 'index'));
});

/**app.get('/pasajero', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/pasajero', 'index.html'));
});
app.get('/pasajero/:pasajero', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/pasajero', 'index.html'));
});
app.get('/pasajero/perfil/:pasajero', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/pasajero/perfil', 'index.html'));
});
app.get('/pasajero/viajes/:pasajero', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/pasajero/viajes', 'index.html'));
});
app.get('/pasajero/gastos/:pasajero', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/pasajero/gastos', 'index.html'));
});
app.get('/pasajero/cupones/:pasajero', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/pasajero/cupones', 'index.html'));
});
app.get('/conductor', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/conductor', 'index.html'));
});
app.get('/conductor/:conductor', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/conductor', 'index.html'));
});
app.get('/conductor/perfil/:conductor', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/conductor/perfil', 'index.html'));
});
app.get('/conductor/vehiculo/:conductor', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/conductor/vehiculo', 'index.html'));
});
app.get('/conductor/documentos/:conductor', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/conductor/documentos', 'index.html'));
});
app.get('/conductor/viajes/:conductor', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/conductor/viajes', 'index.html'));
});
app.get('/conductor/ingresos/:conductor', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/conductor/ingresos', 'index.html'));
});
app.get('/conductor/calificaciones/:conductor', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/conductor/calificaciones', 'index.html'));
});
app.get('/sesion', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/sesion', 'index.html'));
});
app.get('/re&gistro', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/registro', 'index.html'));
});
app.get('/recuperar-contraseña', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/recuperar-contraseña', 'index.html'));
});
app.get('/nueva-contraseña', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/nueva-contraseña', 'index.html'));
});
app.get('/politica-privacidad', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/politica-privacidad', 'index.html'));
});
app.get('/app/eliminacion-cuenta', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/app/eliminacion-cuenta', 'index.html'));
});
/**app.get('/viajes', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/home/viajes', 'index.html'));
});
app.get('/viajes/detalles-viaje', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/home/viajes/detalles-viaje', 'index.html'));
});
app.get('/estadisticas', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/home/estadisticas', 'index.html'));
});
app.get('/ingresos', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/home/ingresos', 'index.html'));
});**/

//Iniciar el servidor
app.listen (app.get('port'), () => {
    console.log ('Server en puerto ', app.get ('port'))
})
