var User = require("../models/user");

var add = function(req, res) {
    var new_user = new User( {
        "email": "albinin0002@gmail.com",
        "name": "Albin George",
        "desc": "Me!!"
    });
    var r = "Success";
    new_user.save(function(err) {
        if(err) {
            r = r + " :: " + err.message;
            throw err;
        }
        r += ":: User created";
        // console.log("User created for Albin George");
    });
    res.status(200).send(r);
}

module.exports = {
    "add": add
}