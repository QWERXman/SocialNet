import React, {useCallback, useEffect, useState} from "react";

import {FriendsService} from "service/friends";
import {Card} from "antd";
import Profile from "components/common/Profile/Profile";
import {IProfileData} from "store/common/profile/state";

const FriendsList = () => {
    const [users, setUsers] = useState<IProfileData[]>([]);

    useEffect(() => {
        FriendsService.myFriends().then((usersList: IProfileData[]) => {
            setUsers(usersList);
        })
    }, []);

    return (
        <div>
            {users.map((user) => (
                <Card style={{ marginTop: 16 }} key={user._id}>
                    <Profile
                        avatar={user.avatar}
                        profileData={user}
                        showEmail={false}
                        showCity={false}
                        avatarWidth={100}
                    />
                </Card>
            ))}
        </div>
    )
}

export default FriendsList;
