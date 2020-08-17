const ProfileModule = require('../modules/profileModule');

const getMyProfile = (req, res) => (new ProfileModule(req, res)).getMyProfile();
const setMyProfile = (req, res) => (new ProfileModule(req, res)).setMyProfile();

module.exports = {
    getMyProfile,
    setMyProfile,
}
