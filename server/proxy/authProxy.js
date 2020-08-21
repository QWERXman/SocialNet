const AuthModule = require('../modules/authModule');

const register = (req, res) => (new AuthModule(req, res)).register();
const login = (req, res) => (new AuthModule(req, res)).login();

module.exports = {
    register,
    login,
}
