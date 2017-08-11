var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var userModel = new Schema({
    name: { type: String },
    phone: { type: String },
    mail: { type: String },
    pwdHash: { type: String }
});

module.exports = mongoose.model('User', userModel);