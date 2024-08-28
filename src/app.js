const express = require('express'); //Se guarda en express el modulo importado Express, este es un framework para Node.js
const app = express(); //Se llama a la funcion express, que inicializa una nueva aplicacion Express, esta aplicaion se asigna a la constante 'app'
app.get('/',(req,res) => { //Define la ruta GET en la raiz ('/') que responde con 'Hello, World!'
    res.send('Hello, World!'); //Envia la respuesta 'Hello, World!' al cliente cuando se accede a la ruta raiz ('/') 
});

const port = process.env.PORT || 3000; //Define el puerto en el que el servidor escuchara las solicitudes
app.listen(port,() => { //Inicia el servidor Express en el puerto definido. Cuando el servidor comienza a escuchar, ejecuta la funcion callback
    console.log('Server running on port ${port}'); //Imprime en la consola un mensaje indicando que puerto esta corriendo el servidor
});

module.exports = app; //Exporta la aplicacion 'app' para que pueda ser utilizada en otros modulos de Node.js
