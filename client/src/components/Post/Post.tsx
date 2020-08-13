import React from "react";
import {Card} from "antd";
import Avatar from "components/Avatar/Avatar";
import {AvatarProps} from "@bigheads/core";
import moment from "moment";
import {IProfileEntity} from "entities/Profile";
import ProfileCard from "../Profile/ProfileCard/ProfileCard";


interface IPost {
    title: string,
    text: string,
    avatar: AvatarProps,
    profile: IProfileEntity,
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
