const express = require("express");
const helmet = require("helmet");
const SchemeRouter = require("../routes/data-router.js");


const server = express();

server.use(helmet());
server.use(express.json());
server.use("/api/data", SchemeRouter);

module.exports = server;
