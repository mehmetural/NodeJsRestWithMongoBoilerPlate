module.exports = function (userRepository) {
    this._repository = userRepository;

    this.authenticate = function (userName, pwdHash) {
        return this._repository.getUser(userName);
    };

    this.register = function (user) {
        console.log(userRepository);

        var added = this._repository.addUser(user);
        return added;
    };
};