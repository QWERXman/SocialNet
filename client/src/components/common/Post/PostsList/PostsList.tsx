import React from "react";
import Post from "../Post";

import styles from "./PostsList.module.scss"
import {IPost} from "store/common/news/state";


interface IPostsList {
    posts: IPost[],
}

const PostsList = ({posts}: IPostsList) => {
    console.log(posts)
    return (
        <div className={styles.PostsList}>
            {
                posts.map(post =>
                    <Post
                        key={post._id}
                        title={post.title}
                        text={post.text}
                        date={post.date}
                        profile={post.profile}
                    />
                )
            }
        </div>
    )
}

export default PostsList;
