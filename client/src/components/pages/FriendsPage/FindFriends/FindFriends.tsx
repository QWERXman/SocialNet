import React, {useEffect, useState} from "react";
import {IProfileEntity} from "entities/Profile";
import {FriendsService} from "service/friends";
import {Card} from "antd";
import Profile from "components/common/Profile/Profile";
import {IProfileData} from "store/common/profile/state";

const FindFriends = () => {
    const [users, setUsers] = useState<IProfileData[]>([]);

    useEffect(() => {
        FriendsService.findList().then((usersList: IProfileData[]) => {
            setUsers(usersList);
        });
    }, []);

    return (
        <div>
            {users.map((user) => (
                <Card style={{ marginTop: 16 }} key={user._id}>
                    <Profile
                        avatar={user.avatar}
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

export default FindFriends;
