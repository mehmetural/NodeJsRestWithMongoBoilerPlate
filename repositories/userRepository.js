
module.exports = function (db) {
    this._db = db;
    var User = require('../models/userModel');
    
    this.getUser = function (userName) {
        return 'amendro';
    };

    this.addUser = function (user) { 
        var user = User(user);
        user.save();
        return user;
    };
}
;