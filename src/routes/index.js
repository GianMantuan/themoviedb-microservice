const { Router } = require("express");
const movie = require("./movie");

const routes = Router();

routes.use("/movie", movie);

module.exports = routes;
