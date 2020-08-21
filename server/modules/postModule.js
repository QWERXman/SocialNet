const BaseModule = require("./base");
const Profile = require("../classes/Profile");
const Post = require("../classes/Post");
const ObjectId = require("Mongoose").Types.ObjectId;

class PostModule extends BaseModule {
    async create() {
        try {
            const profile = await new Profile(this.req.user.userId).fillFromDB();
            const post = await Post.create({
                profileId: profile.id,
                text: this.req.body.text,
                title: this.req.body.title,
                date: new Date(),
            })

            this.res.json(post);

        } catch (e) {
            this.res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова', e })
        }
    }

    async list() {
        try {
            const filter = {};
            if (this.req.query.profileId) {
                filter.profileId = ObjectId(this.req.query.profileId);
            }

            const postsList = await Post.list(filter);

            this.res.json(postsList);
        } catch (e) {
            this.res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова', e })
        }
    }
}

module.exports = PostModule
