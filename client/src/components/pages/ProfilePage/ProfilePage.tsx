import React from "react";
import {useSelector} from 'react-redux';
import {IStore} from 'store/store';
import PostsList from "../../Post/PostsList/PostsList";

import './ProfilePage.css'
import Profile from "../../Profile/Profile";


const ProfilePage = () => {
    const profileData = useSelector((store: IStore) => store.profile);

    return (
        <div className="ProfilePage">
            <Profile profileData={profileData} avatar={profileData.avatar}/>
            <PostsList profileId={profileData._id}/>
        </div>
    );
}

export default ProfilePage;
