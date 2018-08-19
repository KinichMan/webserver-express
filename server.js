const express = require('express');
const app = express()
const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
// EXPRESS HBS
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    // res.send('Hola mundo')
    res.render('home', {
        nombre: 'Kinich',
    });
});

app.get('/about', (req, res) => {
    // res.send('Hola mundo')
    res.render('about', {});
});

// app.get('/data', (req, res) => {
//     // res.send('Hola mundo')
//     let salida = {
//         nombre: 'Kinich',
//         edad: 32,
//         url: req.url
//     };
//     //el método send envía los content type Json
//     res.send(salida);
// });

// app.get('/data', (req, res) => {
//     res.send('Hola data');

// });
//RECIBE UN CALLBACK
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});