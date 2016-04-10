var Expense = require("../models/expense");

var add = function(req, res) {
    // res.status(200).send("success");
    console.log(req.body);
    var expense = new Expense(req.body);
    var r = "Success";
    expense.save(function(err) {
        if(err) {
            if(err.name == 'MongoError' && err.code == 11000) {
                console.log("Duplicate expense for " + req.body.short_desc);
                res.status(409).send("Email already exists");
                return;
            } else {
                throw err;
            }
        }
        console.log("Expense created for " + req.body.short_desc);
        res.status(200).send("Success");
    });
}

var list = function(req, res) {
    res.status(200).send("success");
}

module.exports = {
    "add": add,
    "list": list
}