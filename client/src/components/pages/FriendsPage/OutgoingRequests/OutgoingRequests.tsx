import React, {useEffect, useState} from "react";
import {IProfileEntity} from "entities/Profile";
import {FriendsService} from "service/friends";
import {Card} from "antd";
import Profile from "components/Profile/Profile";

const OutgoingRequests = () => {
    const [users, setUsers] = useState<IProfileEntity[]>([]);

    useEffect(() => {
        FriendsService.outgoingRequests().then((usersList: IProfileEntity[]) => {
            setUsers(usersList);
        })
    }, []);

    return (
        <div>
            {users.map((user) => (
                <Card style={{ marginTop: 16 }} key={user._id}>
                    <Profile avatar={user.avatar} profileData={user}/>
                </Card>
            ))}
        </div>
    )
}

export default OutgoingRequests;
