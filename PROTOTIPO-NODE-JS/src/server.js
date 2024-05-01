//Funciona tipo Listener HTTP
//Acá se declaran todas las rutas y se atienden las solicitudes de las páginas

var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackConfig = require('../webpack.config');
var bodyParser = require('body-parser');

var app = express();
app.set('port', (process.env.PORT || 3000)); //puerto donde escucharemos las solicitudes.
app.use('/static', express.static('dist'));  //declaramos la carpeta pública que nuestros usuarios puedan ver -> la renombramos como Static
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); // decodificación de caracteres
app.use(webpackDevMiddleware(webpack(webpackConfig))); //permite a app(Express) comunicarse con Webpack

app.get('/',function(req,res,next){//Creamos las rutas o secciones que va tener nuestra página.
    res.send('Returning on GET - TEST');
});

app.listen(app.get('port'),()=>{ //listener en el puesto especificado
    console.log('servidor activo');//Una vez inicializado mostrará esto por consola.
});