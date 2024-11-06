
const express = require('express'); // usar la libreria
const app = express(); // Inicializar Servidor
const port = 3000; // puerto que voy a usar

// importar middlewares
const manage404 = require('./middlewares/manage404');

// express
app.use(express.json());

// public
app.use(express.static('public'));

// Motor PUG para plantilla
app.set('view engine', 'pug');
app.set('views','./views');

// GET http://localhost:3000
/* app.get('/', (req, res) => {
    res.send('Hello 06 WEB PUG!')
}); */

// Rutas WEB
const paginaRoutes = require("./routes/pagina.web.routes");
app.use('/', paginaRoutes); 

 // Para todo el resto de rutas no contempladas
app.use('*', manage404);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});