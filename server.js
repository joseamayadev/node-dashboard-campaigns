const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.static("express"));
// URL predeterminada para el sitio web 
app.use('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/express/index.html'));
    // __ dirname: se resolverá en su carpeta del proyecto. 
});

app.use('/inicio', function(req, res) {
    res.sendFile(path.join(__dirname + '/express/index.html'));
    // __ dirname: se resolverá en su carpeta del proyecto. 
});
const server = http.createServer(app);
const port = 3000;
server.listen(port);
console.debug('Servidor escuchando en port' + port);