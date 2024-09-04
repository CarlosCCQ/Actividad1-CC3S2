const app = require('./app'); //Utilizara el modulo app del archivo app.js

const port = process.env.PORT || 3000; //Se especifica el puerto donde se escucharan las solicitudes de los clientes

app.listen(port, () => {
    console.log(`Server running on port ${port}`);//Imprime el puerto en uso, en este caso 3000
});