<h1>Actividad1-CC3S2</h1>
<h2>1. Configuración del entorno</h2>
<p>1. Inicializa el proyecto de Node.js:</p>

![Para inicializar el proyecto](./imagenes/imagen1.1.png)

<p>2. Instala las dependencias necesarias:</p>

![Instalacion de dependencias](./imagenes/imagen1.2.png)

<p>3. Crea la estructura del proyecto:</p>

![Estructura del proyecto](./imagenes/imagen1.3.png)

<p>4. Implementa la API REST en src/app.js:</p>

![Implementación del API REST](./imagenes/imagen1.4.png)

<p>5. Escribe un test básico en tests/app.test.js</p>

![Test básico](./imagenes/imagen1.5.png)

<p>6. Configura el script de test en package.json</p>

![Configuración de script](./imagenes/imagen1.6.png)

<h2>2. Pipeline CI/CD</h2>

<h3>Parte 1: Configura integración continua (CI) con GitHub Actions</h3>
<h3>- Crea un archivo de configuración para GitHub Actions:</h3>

<p>1. Crea la estructura para GitHub Actions:</p>

![Estructura](./imagenes/imagen2.1.png)

<p>2. Define el flujo de trabajo en <b>.github/workflows/ci.yml</b>:</p>

![Flujo de trabajo](./imagenes/imagen2.2.png)

<h3>Parte 2: Configura entrega continua (CD) con Docker</h3>
<h3>- Crea un archivo Docker para contenerizar la aplicación:</h3>
<p>1. Crea un archivo <b>Dockerfile</b>:</p>

![Dockerfile](./imagenes/imagenDockerfile.png)

<p>2. Construye la imagen de Docker:</p>

![Imagen Docker](./imagenes/construccionImagenDocker.png)

<p>3. Corre el contenedor localmente:</p>

![Contenedor Local](./imagenes/contenedorDockerLocal.png)