//***archivo de configuración para determinar como queremos que se compile el código de nuestra web-app

const path = require ('path');// nos permite acceder a la ruta de nuestro proyecto de manera sencilla
const webpack = require('webpack');
const htmlWebpackPlugin = require ('html-webpack-plugin'); // nos permite exportar nuestro html a la carpeta de distribución

module.exports={ //módulo de webpack -- permite crear un objeto que puede ser requerido en otros archivos js dentro de node.js através de la función require('').
    mode:'development',
    entry: './src/cliente/js/index.js', // indicamos cuales son nuestros archivos js y css para agruparlos y comprimirlos en un solo arhivo, para desplegar la app.
    output: {
        path: path.join(__dirname, 'dist'), //path nos permite crear una ruta hacia una ruta en específico sin preocuparnos por el separador de cada S.O
        filename: 'bundle.js' //nombre del archivo de salida
    },
    module:{ // permite procesar reglas que webpack debe seguir para procesar nuestros archivos y mandarlos a nuestro archivo de salida establecido.
        rules:
        [
            {
                test:/\.css$/, //solo toma archivos terminados en .css
                use: ['style-loader','css-loader']//usados para comprimir css
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({//Nos permite agregar rutas
            filename: 'index.html',//Determina  nombre del archivo de acceso de entrada a la web-abb
            template: './src/cliente/product-admin/index.html'//Determina la ruta del archivo y además permite copiar el index.html y lo copie en la carpeta dist.
        }),
        new htmlWebpackPlugin({
            filename: 'products.html',
            template: './src/cliente/product-admin/products.html'
        }),
        new htmlWebpackPlugin({
            filename: 'accounts.html',
            template: './src/cliente/product-admin/accounts.html'
        }),
        new htmlWebpackPlugin({
            filename: 'add-product.html',
            template: './src/cliente/product-admin/add-product.html'
        }),
        new htmlWebpackPlugin({
            filename: 'edit-product.html',
            template: './src/cliente/product-admin/edit-product.html'
        }),
        new htmlWebpackPlugin({
            filename: 'login.html',
            template: './src/cliente/product-admin/login.html'
        }),
        new htmlWebpackPlugin({
            filename: 'home.html',
            template: './src/cliente/e-commerse/home.html'
        }),
        new htmlWebpackPlugin({
            filename: 'about.html',
            template: './src/cliente/e-commerse/about.html'
        }),
        new htmlWebpackPlugin({
            filename: 'contact.html',
            template: './src/cliente/e-commerse/contact.html'
        }),
        new htmlWebpackPlugin({
            filename: 'home-02.html',
            template: './src/cliente/e-commerse/home-02.html'
        }),
        new htmlWebpackPlugin({
            filename: 'home-03.html',
            template: './src/cliente/e-commerse/home-03.html'
        }),
        new htmlWebpackPlugin({
            filename: 'product-detail.html',
            template: './src/cliente/e-commerse/product-detail.html'
        }),
        new htmlWebpackPlugin({
            filename: 'product.html',
            template: './src/cliente/e-commerse/product.html'
        }),
        new htmlWebpackPlugin({
            filename: 'shoping-cart.html',
            template: './src/cliente/e-commerse/shoping-cart.html'
        })
    ]
}