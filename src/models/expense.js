var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

// create a schema
var expenseSchema = new Schema({
    id: ObjectId,
    short_desc: { type: String, required: true, trim: true },
    amount: {
        type: Number,
        get: getPrice,
        set: setPrice,
        required: true
    },
    paid_by: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    split_between: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    desc: String,
    created_at: Date,
    updated_at: Date
});

expenseSchema.pre('save', function(next){
    now = new Date();
    this.updated_at = now;
    if ( !this.created_at ) {
        this.created_at = now;
    }
    next();
});

expenseSchema.set('toObject', { getters: true });
expenseSchema.set('toJSON', { getters: true });

function getPrice(num){
    return (num/100).toFixed(2);
}

function setPrice(num){
    return num*100;
}


var Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;