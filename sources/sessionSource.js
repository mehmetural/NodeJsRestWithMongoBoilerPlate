module.exports = function (app,_userService) {
  app.get('/session', function (req, res) {
    var retVal = _userService.authenticate('', '');
    res.send(retVal);
  });
}