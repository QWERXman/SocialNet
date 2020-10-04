import React from "react";
import {Popover} from "antd";
import Avatar from "components/common/Avatar/Avatar";
import {AvatarProps} from "@bigheads/core";
import Profile from "../Profile";
import {IProfileData} from "store/common/profile/state";

import styles from './ProfileCard.module.scss';


interface IProfileCard {
    className?: string,
    configurable: boolean,
    profile: IProfileData,
}

const ProfileCard = ({configurable, profile, className}: IProfileCard) => {
    return (
        <div className={className}>
            <Popover
                arrowPointAtCenter
                placement="topLeft"
                content={
                    <Profile profileData={profile}/>
                }
            >
                <div>
                    <Avatar config={profile.avatar} configurable={configurable} className={styles.Avatar}/>
                </div>
            </Popover>
        </div>
    )
}

export default ProfileCard;
