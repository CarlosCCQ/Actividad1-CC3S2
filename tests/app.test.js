const request = require('supertest');//Import la libreria 'supertest', que se utiliza para realizar pruebas en aplicaciones web HTTP 
const app = require('../src/app');//Se importa Express desde app.js de la carpeta src

let server; //Se utiliza para almacenar la instancia del servidor Express, esta se iniciara al ejecutar las pruebas y finalizara al finalizar las pruebas

beforeAll((done) => {
    server = app.listen(done); //Para iniciar el servidor en un puerto dinamico
});

afterAll((done) => {
    server.close(done); //Para cerrar el servidor despues de todas las pruebas
});

describe('GET /',() => {//Se esta agrupando un conjunto de pruebas para la ruta 'GET /'
    it('should return Hello, World!', async () => {//Se define el test, el primer argumento es lo que deberia hacer el codigo, el segundo argumento es la logica de la prueba asincronica
        const res = await request(app).get('/');//await espera a que se complete la solicitud HTTP
        expect(res.statusCode).toEqual(200);//Se verifica el estado HTTP en la respuesta
        expect(res.text).toBe('Hello, World!');//Aqui se verifica que res.text sea exactamente 'Hello, World!'
    });
});
