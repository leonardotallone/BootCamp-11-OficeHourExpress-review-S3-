//Requerir express
const express = require("express");
const app = express();

/* //Requerir las rutas si las necesito
const routes = require("./routes"); */

//Requerir morgan
const morgan = require("morgan");

//Ejecuta morgan
app.use(morgan("tiny"));

//Parcer. Es un método incorporado en express para reconocer el objeto de solicitud entrante como objeto JSON
app.use(express.json());

/* //Middleware para rutas
app.use("/api", routes); */

//GET
app.get("/", function (req, res) {
  res.status(200).send("Hola como estas");
});

//GET con body
app.get("/body", function (req, res) {
  let nombre = req.body.nombre;
  res.status(200).send(`Hola ${nombre} como estas`);
});

//GET con params
app.get("/params/:name", function (req, res) {
  let nombre = req.params.name;
  res.status(200).send(`Hola ${nombre}`);
});

//POST
app.post("/post", function (req, res) {
  res.status(201).send(req.body);
});

//PUT ejemplo con tweety
app.put("/put/:id", function (req, res) {
  res.sendStatus(200);
});

//DELET ejemplo con tweety
app.delete("/:id", (req, res) => {
  res.status(202).send(tweet);
});

//Levanta el servidor
app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});


/* ¿Qué es el middleware? Son esos métodos/funciones/operaciones que se denominan ENTRE el procesamiento de la Solicitud y el envío de la Respuesta en su método de aplicación. */

/* NECESITAS express.json() y express.urlencoded() para POST y PUT solicitudes, porque en ambas solicitudes estás enviando datos (en la forma de algún objeto de datos) al servidor y le está pidiendo al que acepte o almacene esos datos (objeto), que está encerrado en el cuerpo (es decir, req.body) de esa solicitud (POST o PUT) */

/* Node (o más correctamente: Node.js) es un entorno que trabaja en tiempo de ejecución, de código abierto, multi-plataforma, que permite a los desarrolladores crear toda clase de herramientas de lado servidor y aplicaciones en JavaScript. La ejecución en tiempo real está pensada para usarse fuera del contexto de un explorador web (es decir, ejecutarse directamente en una computadora o sistema operativo de servidor). Como tal, el entorno omite las APIs de JavaScript específicas del explorador web y añade soporte para APIs de sistema operativo más tradicionales que incluyen HTTP y bibliotecas de sistemas de ficheros. */

/* Express  Proporciona mecanismos para:
-Escribir y manejar peticiones HTTP en diferentes caminos URL (o rutas)

-Establecer ajustes de aplicaciones web como qué puerto usar para conectar, y la localización de las plantillas que se utilizan para renderizar la respuesta.

-Añadir procesamiento de peticiones "middleware" adicional en cualquier punto dentro de la tubería de manejo de la petición. */