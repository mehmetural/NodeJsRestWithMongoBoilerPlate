module.exports = function (app,_userService) {
    app.post('/user', function (req, res) {
        var retVal = _userService.register(req.body);
        res.send(retVal);
    });
} 