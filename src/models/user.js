var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

// create a schema
var userSchema = new Schema({
    id: ObjectId,
    email: { type: String, required: true, trim: true, unique: true},
    name: { type: String, required: true, trim: true },
    created_at: Date,
    updated_at: Date
});

userSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});

var User = mongoose.model('User', userSchema);

module.exports = User;