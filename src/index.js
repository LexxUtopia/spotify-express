"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var port = 3030;
app.get('/', function (req, res) { return res.sendDate; });
app.listen(port, function () { return console.log('Test'); });
