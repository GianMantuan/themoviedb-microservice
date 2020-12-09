const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");
const routes = require("./src/routes");

// Create an ExpressJS app
const app = express();

// Use ExpressJS middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());

app.use(routes);

module.exports = app;
