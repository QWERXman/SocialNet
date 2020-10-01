import React, {useEffect, useState} from "react";
import {PostService} from "../../../service/post";
import {IPostEntity} from "../../../entities/Post";
import Post from "../Post";

import styles from "./PostsList.module.scss"


interface IPostsList {
    profileId?: string,
    pageSize?: number
}

const PostsList = ({profileId, pageSize}: IPostsList) => {

    const [posts, setPosts] = useState<IPostEntity[]>([])

    useEffect(() => {
        PostService.list({profileId, pageSize}).then((posts: IPostEntity[]) => {
            setPosts(posts || []);
        })
    },[profileId]);

    return (
        <div className={styles.PostsList}>
            {
                posts.map(post =>
                    <Post
                        key={post._id}
                        title={post.title}
                        text={post.text}
                        date={post.date}
                        avatar={post.avatar}
                        profile={post.profile}
                    />
                )
            }
        </div>
    )
}

export default PostsList;
