import React, {useCallback} from "react";
import {Button, Col, Row} from "antd";
import Avatar from "components/common/Avatar/Avatar";
import EditProfile from "components/common/Profile/EditProfile/EditProfile";
import PostCreator from "components/common/Post/PostCreator/PostCreator";
import moment from "moment";
import {useSelector} from "react-redux";

import styles from "./Profile.module.scss"
import {FriendsService} from "../../../service/friends";
import MessageCreator from "../Message/MessageCreator/MessageCreator";
import {IProfileData} from "store/common/profile/state";
import {selectMyProfile} from "store/common/profile/selectors";

interface IProfile {
    profileData: IProfileData,
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
                     showPostCreator,
                     showAddFriend,
                     showStatus=true,
                     showBirthday=true,
                     showCity=true,
                     showEmail=true,
                     showSendMessage=true,
                     avatarWidth=200,
}: IProfile) => {
    const myProfile = useSelector(selectMyProfile)
    const birthday = profileData.birthday && moment(profileData.birthday).format('DD.MM.YYYY')

    const addFriend = useCallback(() => {
        FriendsService.addFriend({profileId: profileData._id})
    }, []);

    if (!myProfile) {
        return null;
    }

    const isMyProfile = myProfile._id === profileData._id;

    return (
        <div className={styles.Profile}>
            <div className={styles.ProfileAvatar} style={{width: avatarWidth}}>
                <Avatar config={profileData.avatar} configurable={isMyProfile}/>
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
                    {showSendMessage && !isMyProfile && <MessageCreator profile={profileData}/>}
                </div>
            </div>
        </div>
    )
}

export default Profile;
