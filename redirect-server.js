"use strict";

const express = require("express");
const fs = require("fs");
const path = require("path");
const http = require("http");

let app = express();

const server = http.createServer({}, app);

app.get("/from", (req, res) => {
    res.redirect("http://localhost:4900?redirected=true");
});

server.listen(4901, function () {
    console.log("The sample is now available at http://localhost:4900");
});
