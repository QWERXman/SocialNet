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

import styles from "./Profile.module.scss"
import {FriendsService} from "../../service/friends";
import MessageCreator from "../Message/MessageCreator/MessageCreator";

interface IProfile {
    profileData: IProfileEntity,
    avatar?: AvatarProps,
    showPostCreator?: boolean,
    showAddFriend?: boolean,
    showStatus?: boolean,
    showBirthday?: boolean,
    showCity?: boolean,
    showEmail?: boolean,
    showSendMessage?: boolean,
    avatarWidth?: number
}

const Profile = ({
                     profileData,
                     avatar,
                     showPostCreator,
                     showAddFriend,
                     showStatus=true,
                     showBirthday=true,
                     showCity=true,
                     showEmail=true,
                     showSendMessage=true,
                     avatarWidth=200,

}: IProfile) => {
    const myProfileId = useSelector((store:IStore) => store.profile._id)
    const birthday = profileData.birthday && moment(profileData.birthday).format('DD.MM.YYYY')

    const isMyProfile = myProfileId === profileData._id;

    const addFriend = useCallback(() => {
        FriendsService.addFriend({profileId: profileData._id})
    }, []);

    const sendMessage = useCallback(() => {
        FriendsService.addFriend({profileId: profileData._id})
    }, []);

    return (
        <div className={styles.Profile}>
            <div className={styles.ProfileAvatar} style={{width: avatarWidth}}>
                <Avatar config={avatar} configurable={isMyProfile}/>
            </div>

            <div className={styles.ProfileData}>
                <div>
                    <div className={styles.UserName}>{profileData.name} {profileData.secondName}</div>

                    <div className={styles.Separator}></div>

                    {isMyProfile &&
                        <div className={styles.EditProfile}>
                            <EditProfile />
                        </div>
                    }

                    {showStatus &&
                        <Row>
                            <Col flex="70px">Status:</Col>
                            <Col flex="auto">{profileData.status}</Col>
                        </Row>
                    }
                    {showBirthday &&
                        <Row>
                            <Col flex="70px">Birthday:</Col>
                            <Col flex="auto">{birthday}</Col>
                        </Row>
                    }
                    {showCity &&
                        <Row>
                            <Col flex="70px">City:</Col>
                            <Col flex="auto">{profileData.city}</Col>
                        </Row>
                    }
                    {showEmail &&
                        <Row>
                            <Col flex="70px">Email:</Col>
                            <Col flex="auto">{profileData.email}</Col>
                        </Row>
                    }

                    {showPostCreator && <PostCreator className={styles.PostCreator}/>}
                    {showAddFriend && <Button onClick={addFriend} size={'small'}>Add to friends</Button>}
                    {showSendMessage && <MessageCreator profile={profileData}/>}
                </div>
            </div>
        </div>
    )
}

export default Profile;
