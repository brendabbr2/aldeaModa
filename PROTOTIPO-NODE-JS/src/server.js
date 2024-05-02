//Funciona tipo Listener HTTP
//Acá se declaran todas las rutas y se atienden las solicitudes de las páginas

var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackConfig = require('../webpack.config');
var bodyParser = require('body-parser');

const productsRepository = require("./servidor/productsRepository");
const ordersRepository = require("./servidor/ordersRepository");
const accountsRepository = require("./servidor/accountsRepository");

var app = express();
//MOTOR DE PLANTILLAS
app.set('view engine', 'ejs');
app.set('views',__dirname + '/cliente/views');

app.set('port', (process.env.PORT || 3000)); //puerto donde escucharemos las solicitudes.
app.use('/static', express.static('dist'));  //declaramos la carpeta pública que nuestros usuarios puedan ver -> la renombramos como Static
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); // decodificación de caracteres
app.use(webpackDevMiddleware(webpack(webpackConfig))); //webpackDevMiddleware permite a app(Express) comunicarse con Webpack

var config = {
    user: 'postgres',
    host: 'localhost', 
    database: 'product_admin',   
    password: 'password',
    port: '5432'    
  };

const oProductsRepository = new productsRepository(config);
const oOrdersRepository = new ordersRepository(config);
const oAccountsRepository = new accountsRepository(config);


app.get('/',function(req,res,next){//Creamos las rutas o secciones que va tener nuestra página. 
    oOrdersRepository.getOrders()
    .then(data => {
        res.render("product-admin/index", {orders : data});
    })
    .catch(error => {
        console.error("Error al obtener ordenes:", error);
        // Manejar errores
    });     
});

app.get('/index.html',function(req,res,next){
    oOrdersRepository.getOrders()
    .then(data => {
        res.render("product-admin/index", {orders : data});
    })
    .catch(error => {
        console.error("Error al obtener ordenes:", error);
        // Manejar errores
    });  
});

app.get('/accounts.html',function(req,res,next){
    oAccountsRepository.getAccounts()
    .then(data => {
        res.render("product-admin/accounts", {accounts : data});
    })
    .catch(error => {
        console.error("Error al obtener accounts:", error);
        // Manejar errores
    }); 
});

app.get('/add-product.html',function(req,res,next){
    res.render("product-admin/add-product");
});

app.get('/edit-product.html',function(req,res,next){
    res.render("product-admin/edit-product");
});

app.get('/login.html',function(req,res,next){
    res.render("product-admin/login");
});

app.get('/products.html',function(req,res,next){
    oProductsRepository.getProductos()
    .then(data => {
        res.render("product-admin/products", {products: data});
    })
    .catch(error => {
        console.error("Error al obtener productos:", error);
        // Manejar errores
    });    
});

app.listen(app.get('port'),()=>{ //listener en el puesto especificado
    console.log('servidor activo');//Una vez inicializado mostrará esto por consola.
});