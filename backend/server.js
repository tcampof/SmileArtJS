const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
var path = require('path')
var fs = require('fs')
var { config } = require('./helpers/config.js');
const port = config.PORT;



//INICIAMOS EXPRESS
const app = express();


app.use(cors());


// INICIAMOS SERVIDOR HTTP
var http = require('http').createServer(app);

// LOG DE ACCESO A ENDPOINTS 
var accessLogStream = fs.createWriteStream(path.join(__dirname, '/logs/access.log'), { flags: 'a' });
app.use(morgan('combined', { stream: accessLogStream }));

//COLOCAMOS EL SERVIDOR A ESCUCHAR
http.listen(port, function () { console.log('Aplicación sirviendo en el puerto N° :' + port); });
http.setTimeout(60000000);

// ROUTES

app.use("/api/usuario", require('./routes/usuario.routes'));