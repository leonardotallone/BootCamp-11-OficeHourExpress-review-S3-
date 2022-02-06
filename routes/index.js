const express = require("express");
const router = express.Router();

//GET
router.get("/", function (req, res) {
  res.status(200).send("Hola como estas");
});

//GET con body
router.get("/body", function (req, res) {
  let nombre = req.body.nombre;
  res.status(200).send(`Hola ${nombre} como estas?`);
});

//GET con params
router.get("/params/:name", function (req, res) {
  let nombre = req.params.name;
  res.status(200).send(`Hola ${nombre} como estas?`);
});

//POST
router.post("/post", function (req, res) {
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

module.exports = router;
