import React, {useCallback} from "react";
import {Button, Col, Row} from "antd";
import Avatar from "components/Avatar/Avatar";
import EditProfile from "components/Profile/EditProfile/EditProfile";
import PostCreator from "components/Post/PostCreator/PostCreator";
import {IProfileEntity} from "entities/Profile";
import moment from "moment";
import {AvatarProps} from "@bigheads/core";
import {useSelector} from "react-redux";
import {IStore} from "store/store";

import "./Profile.css"
import {FriendsService} from "../../service/friends";

interface IProfile {
    profileData: IProfileEntity,
    avatar?: AvatarProps
}

const Profile = ({profileData, avatar}: IProfile) => {
    const myProfileId = useSelector((store:IStore) => store.profile._id)
    const birthday = profileData.birthday && moment(profileData.birthday).format('DD.MM.YYYY')

    const isMyProfile = myProfileId === profileData._id;

    const addFriend = useCallback(() => {
        FriendsService.addFriend({profileId: profileData._id})
    }, []);

    return (
        <div className="Profile">
            <div className="ProfileAvatar">
                <Avatar config={avatar} configurable={isMyProfile}/>
            </div>

            <div className="ProfileData">
                <div>
                    <div className="ProfileData-UserName">{profileData.name} {profileData.secondName}</div>

                    <div className="ProfileData-Separator"></div>

                    <div className="ProfileData-EditProfile">
                        {isMyProfile && <EditProfile />}
                    </div>

                    <Row>
                        <Col flex="70px">Status:</Col>
                        <Col flex="auto">{profileData.status}</Col>
                    </Row>
                    <Row>
                        <Col flex="70px">Birthday:</Col>
                        <Col flex="auto">{birthday}</Col>
                    </Row>
                    <Row>
                        <Col flex="70px">City:</Col>
                        <Col flex="auto">{profileData.city}</Col>
                    </Row>
                    <Row>
                        <Col flex="70px">Email:</Col>
                        <Col flex="auto">{profileData.email}</Col>
                    </Row>

                    {
                        isMyProfile
                            ? <PostCreator className="PostCreator"/>
                            : <Button onClick={addFriend}>Add to friends</Button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Profile;
