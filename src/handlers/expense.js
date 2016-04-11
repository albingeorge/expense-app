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
    Expense.find().exec(function(err, expense) {
        if(err) {
            throw err;
        }
        res.status(200).send(expense);
    });
}

var update = function(req, res) {
    var query = req.body.query;
    var upsert_data = req.body.update_data;
    // var query = {'username':req.user.username};
    // req.newData.username = req.user.username;
    Expense.findOneAndUpdate(query, upsert_data, {upsert:true}, function(err, doc){
        if (err) return res.send(500, { error: err });
        res.status(200).send("Success");
    });

}

module.exports = {
    "add": add,
    "list": list,
    "update": update
}