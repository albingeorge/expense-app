var mongoose = require("mongoose");
var config = require("./config");

module.exports = function() {
    mongoose.connect(config.db_URL);

    mongoose.connection.on('error', console.error.bind(console,
        'Connection error:'));

    mongoose.connection.once('open', function () {
        console.info('Connected to database')
    });

    return mongoose.connection;
}