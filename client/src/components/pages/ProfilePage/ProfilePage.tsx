import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import PostsList from "../../common/Post/PostsList/PostsList";

import './ProfilePage.module.scss'
import Profile from "../../common/Profile/Profile";
import {selectMyPosts, selectMyProfile} from "store/common/profile/selectors";

import styles from './ProfilePage.module.scss'
import {fetchProfilePostsAction, fetchProfilePostsSuccessAction} from "../../../store/common/profile/actionCreators";

const ProfilePage = () => {
    const dispatch = useDispatch();
    const myProfileData = useSelector(selectMyProfile);
    const myPosts = useSelector(selectMyPosts);

    useEffect(() => {
        if(myProfileData) {
            dispatch(fetchProfilePostsAction({
                profileId: myProfileData._id,
                pageSize: 5
            }));
        }
    }, [myProfileData])

    if (!myProfileData) {
        return null;
    }

    return (
        <div className={styles.ProfilePage}>
            <Profile profileData={myProfileData} showSendMessage={false} showPostCreator={true}/>
            {myPosts && <PostsList posts={myPosts}/>}
        </div>
    );
}

export default ProfilePage;
