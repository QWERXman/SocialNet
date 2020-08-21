const ProfileModule = require('../modules/profileModule');

const getMyProfile = (req, res) => (new ProfileModule(req, res)).getMyProfile();
const setMyProfile = (req, res) => (new ProfileModule(req, res)).setMyProfile();
const editAvatar = (req, res) => (new ProfileModule(req, res)).editAvatar();
const listWithoutSelf = (req, res) => (new ProfileModule(req, res)).listWithoutSelf();

module.exports = {
    getMyProfile,
    setMyProfile,
    editAvatar,
    listWithoutSelf,
}
