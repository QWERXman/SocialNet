import React, {useEffect} from "react";
import PostsList from "../../common/Post/PostsList/PostsList";
import {useDispatch, useSelector} from "react-redux";
import {fetchNewsAction, receiveNewPostAction} from "store/common/news/actionCreators";
import {selectNews} from "store/common/news/selectors";
import useSocket from "../../../hooks/socket";
import {IPost} from "store/common/news/state";

import styles from './NewsPage.module.scss';


const NewsPage = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectNews);
    const {subscribe, unsubscribe} = useSocket();

    useEffect(() => {
        if (!posts || !posts.length) {
            dispatch(fetchNewsAction());
        }
    }, []);

    useEffect(() => {
        subscribe('NewPostCreated', (post: IPost) => {
            dispatch(receiveNewPostAction(post));
        })

        return () => {
            unsubscribe('NewPostCreated')
        }
    }, [])

    return (
        <div className={styles.NewsPage}>
            <PostsList posts={posts}/>
        </div>
    )
}

export default NewsPage;
