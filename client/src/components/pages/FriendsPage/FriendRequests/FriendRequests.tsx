import React, {useEffect, useState} from "react";

import {FriendsService} from "service/friends";
import {Card} from "antd";
import Profile from "components/common/Profile/Profile";
import {IProfileData} from "store/common/profile/state";

import styles from './FriendRequests.module.scss';


const FriendRequests = () => {
    const [users, setUsers] = useState<IProfileData[]>([]);

    useEffect(() => {
        FriendsService.incomingRequests().then((usersList: IProfileData[]) => {
            setUsers(usersList);
        })
    }, []);

    return (
        <div className={styles.FriendRequests}>
            {users.map((user) => (
                <Card style={{ marginTop: 16 }} key={user._id}>
                    <Profile
                        profileData={user}
                        showAddFriend={true}
                        showEmail={false}
                        showCity={false}
                        avatarWidth={100}
                    />
                </Card>
            ))}
        </div>
    )
}

export default FriendRequests;
