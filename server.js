// Modulos y variables de node
const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
const port = 3000;


// Ruta del css estatico
app.use(express.static("views"));


// URL predeterminada para el sitio web con la vista hacia archivo HTML que
// que contiene el dashboard
app.use('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});


// En caso de querer entrar a través de inicio y usar el root como middleware
app.use('/inicio', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});


// En desarrollo usar 300 en producción usar el puerto de preferencia
// Recomendable usarlo como varible de entorno o en el servicio de hosting
app.listen(port, () => {
    console.log('Servidor escuchando en el puerto 3000!');
});