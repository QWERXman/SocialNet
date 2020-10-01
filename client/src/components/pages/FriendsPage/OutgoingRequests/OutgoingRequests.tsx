import React, {useEffect, useState} from "react";

import {FriendsService} from "service/friends";
import {Card} from "antd";
import Profile from "components/Profile/Profile";
import {IProfileData} from "../../../../store2/common/profile/state";

const OutgoingRequests = () => {
    const [users, setUsers] = useState<IProfileData[]>([]);

    useEffect(() => {
        FriendsService.outgoingRequests().then((usersList: IProfileData[]) => {
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

export default OutgoingRequests;
