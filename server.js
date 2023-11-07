"use strict";

const express = require("express");
const fs = require("fs");
const path = require("path");
const http = require("http");

let app = express();

const server = http.createServer({}, app);

app.use(function (req, res, next) {
    return next();
});
app.use(express.static("."));

app.get("/test", (req, res) => {
    console.log(JSON.stringify(req.query, null, 4));
});

server.listen(4900, function () {
    console.log("The sample is now available at http://localhost:4900");
});
