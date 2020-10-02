import React from "react";
import {useSelector} from 'react-redux';
import PostsList from "../../common/Post/PostsList/PostsList";

import './ProfilePage.module.scss'
import Profile from "../../common/Profile/Profile";
import {selectMyProfile} from "store/common/profile/selectors";

import styles from './ProfilePage.module.scss'

const ProfilePage = () => {
    const myProfileData = useSelector(selectMyProfile);

    if (!myProfileData) {
        return null;
    }

    return (
        <div className={styles.ProfilePage}>
            <Profile profileData={myProfileData} avatar={myProfileData.avatar} showSendMessage={false} showPostCreator={true}/>
            <PostsList profileId={myProfileData._id}/>
        </div>
    );
}

export default ProfilePage;
