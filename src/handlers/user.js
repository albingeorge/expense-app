var User = require("../models/user");

var add = function(req, res) {
    // console.dir(req.body);
    var new_user = new User(req.body);
    var r = "Success";
    new_user.save(function(err) {
        if(err) {
            throw err;
        }
        console.log("User created for " + req.body.name);
        res.status(200).send("Success");
    });
}

var list = function(req, res) {
    // var user = new User();
    User.find().exec(function(err, user) {
        if(err) {
            throw err;
        }
        res.status(200).send(user);
    })

}

module.exports = {
    "add": add,
    "list": list
}