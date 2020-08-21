const PostModule = require('../modules/postModule');

const create = (req, res) => (new PostModule(req, res)).create();
const list = (req, res) => (new PostModule(req, res)).list();

module.exports = {
    create,
    list
}
