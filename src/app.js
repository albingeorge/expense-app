// Imports
var app = require("express")();
var body_parser = require('body-parser');
var mongoose = require("mongoose");

// Used to manage inputs in requests
app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());

// ROUTES
// app.get("/", function(req, res) {
//     res.status(200).send("success");
// });

var routes = require('./routes/routes');
app.use('/api', routes);

// Listen to port 3000
app.listen(3000);