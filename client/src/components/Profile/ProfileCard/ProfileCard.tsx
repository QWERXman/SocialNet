import React from "react";
import {Popover} from "antd";
import Avatar from "components/Avatar/Avatar";
import {AvatarProps} from "@bigheads/core";
import {IProfileEntity} from "entities/Profile";
import Profile from "../Profile";

interface IProfileCard {
    avatar: AvatarProps,
    configurable: boolean,
    profile: IProfileEntity
}

const ProfileCard = ({avatar, configurable, profile}: IProfileCard) => {
    return (
        <div>
            <Popover
                arrowPointAtCenter
                placement="topLeft"
                content={
                    <Profile profileData={profile} avatar={avatar}/>
                }
            >
                <div>
                    <Avatar config={avatar} configurable={configurable}/>
                </div>
            </Popover>
        </div>
    )
}

export default ProfileCard;
