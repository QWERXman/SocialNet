import React from "react";
import {Card} from "antd";
import Avatar from "components/common/Avatar/Avatar";
import {AvatarProps} from "@bigheads/core";
import moment from "moment";
import ProfileCard from "../Profile/ProfileCard/ProfileCard";
import {IProfileData} from "../../../store2/common/profile/state";


interface IPost {
    title: string,
    text: string,
    avatar: AvatarProps,
    profile: IProfileData,
    date?: moment.Moment
}

const Post = ({title, text, avatar, profile}:IPost) => {
    return (
        <Card style={{ marginTop: 16 }}>
            <Card.Meta
                avatar={<ProfileCard avatar={avatar} configurable={false} profile={profile}/>}
                title={title}
                description={text}
            />
        </Card>
    )
}

export default Post;
