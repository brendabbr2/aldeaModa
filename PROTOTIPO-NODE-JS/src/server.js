var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackConfig = require('../webpack.config');
var bodyParser = require('body-parser');
const { Pool } = require('pg');

var app = express();
//MOTOR DE PLANTILLAS
app.set('view engine', 'ejs');
app.set('views',__dirname + '/cliente/views');

app.set('port', (process.env.PORT || 3000)); //puerto donde escucharemos las solicitudes.
app.use('/static', express.static('dist'));  //declaramos la carpeta pública que nuestros usuarios puedan ver -> la renombramos como Static
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); // decodificación de caracteres
app.use(webpackDevMiddleware(webpack(webpackConfig))); //webpackDevMiddleware permite a app(Express) comunicarse con Webpack

//Datos quemados
var orders = [
    {OrderId : "1221", Status: "Completed", Client: "Oliver T", Location: "CR, San José", OrderDate: "16:00, 12 NOV 2018", EstDeliveryDate: "08:00, 18 NOV 2018"},
    {OrderId : "1222", Status: "Pending", Client: "Oliver T", Location: "CR, San José", OrderDate: "16:00, 12 NOV 2018", EstDeliveryDate: "08:00, 18 NOV 2018"},
    {OrderId : "1223", Status: "Completed", Client: "Oliver T", Location: "CR, San José", OrderDate: "16:00, 12 NOV 2018", EstDeliveryDate: "08:00, 18 NOV 2018"},
    // Agrega más datos si es necesario
];

app.get('/',function(req,res,next){//Creamos las rutas o secciones que va tener nuestra página.    
    res.render("product-admin/index", {orders : orders});
});

app.get('/index.html',function(req,res,next){
    res.render("product-admin/index", {orders : orders});
});

app.get('/accounts.html',function(req,res,next){
    res.render("product-admin/accounts");
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
    var products = [
        {ProductName : "PriscilaPro", UnitSold: 1, InStock: 9, ExpireDate: "28 March 2024"},
        {ProductName : "StevenPro", UnitSold: 2, InStock: 5, ExpireDate: "04 March 2024"},
        // Agrega más datos si es necesario
    ];
    res.render("product-admin/products", {products: products});
});

app.get('/product.html', function(req, res, next) {
    var products = [
        { ProductName: "PriscilaPro", Price: "$20.99", UnitsSold: 1, InStock: 9, ExpireDate: "28 March 2024" },
        { ProductName: "StevenPro", Price: "$25.49", UnitsSold: 2, InStock: 5, ExpireDate: "04 March 2024" },
        // Agrega más datos si es necesario
    ];
    res.render("e-commerce/product", { products: products });
});

app.listen(app.get('port'),()=>{ //listener en el puesto especificado
    console.log('servidor activo');//Una vez inicializado mostrará esto por consola.
});

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'aldeaModa',
    password: '1234',
    port: 5432 // Puerto de PostgreSQL
});

app.get('/', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM Usuarios');
      const usuarios = result.rows;
      res.render('product-admin\index.ejs', { usuarios }); // Asegúrate de que aquí estás pasando los usuarios a la plantilla EJS
      client.release();
    } catch (err) {
      console.error(err);
      res.send('Error al obtener usuarios de la base de datos');
    }
});
