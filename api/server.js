const express = require("express");
const helmet = require("helmet");
const DataRouter = require("../routes/data-router.js");


const server = express();

server.use(helmet());
server.use(express.json());
server.use("/api/data", DataRouter);

module.exports = server;
