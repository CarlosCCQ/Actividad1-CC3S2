const express = require('express'); //Se guarda en express el modulo importado Express, este es un framework para Node.js
const app = express(); //Se llama a la funcion express, que inicializa una nueva aplicacion Express, esta aplicacion se asigna a la constante 'app'

app.get('/',(req,res) => { //Define la ruta GET en la raiz ('/') que responde con 'Hello, World!'
    res.send('Hello, World!'); //Envia la respuesta 'Hello, World!' al cliente cuando se accede a la ruta raiz ('/') 
});

module.exports = app; //Exporta la aplicacion 'app' para que pueda ser utilizada en otros modulos de Node.js
