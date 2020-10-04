const PostModel = require('./../models/Post')
const Profile = require("./Profile");
const Avatar = require("./Avatar");

class Post {
    constructor(profileId, model) {
        this.profileId = profileId;
        this.model = model;
    }

    static async create({profileId, title, text, date}) {
        const postModel = new PostModel({profileId, title, text, date});
        await postModel.save();

        const profile = await Profile.findById(profileId);
        const avatar = await Avatar.findById(profileId);

        const post = {
            ...postModel.toObject(),
            profile: {
                ...profile.toObject(),
                avatar: avatar.toObject()
            }
        }
        return post;
    }

    save() {
        this.model.save();
    }

    static async list(filter) {
        const postsAggregate = await PostModel.collection.aggregate([
            {$match: filter },
            {$lookup:
                    {
                        from: "profileavatars",
                        localField: "profileId",
                        foreignField: "profileId",
                        as: "avatar"
                    }
            },
            {$lookup:
                    {
                        from: "profiles",
                        localField: "profileId",
                        foreignField: "_id",
                        as: "profile"
                    }
            },
            {$sort : {date: -1}},
        ]);

        const posts = (await postsAggregate.toArray()).map(post => {
            post.profile = post.profile[0];
            post.profile.avatar = post.avatar[0];
            return post;
        });

        return posts;
    }
}

module.exports = Post;
