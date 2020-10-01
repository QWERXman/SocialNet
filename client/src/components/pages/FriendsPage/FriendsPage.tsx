import React, {useEffect} from "react";
import {Tabs} from "antd";
import FriendsList from "components/pages/FriendsPage/FriendsList/FriendsList";
import FindFriends from "./FindFriends/FindFriends";
import OutgoingRequests from "./OutgoingRequests/OutgoingRequests";
import FriendRequests from "./FriendRequests/FriendRequests";
import useSocket from "../../../hooks/socket";

const FriendsPage = () => {
    return (
        <div>
            <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab="My friends" key="1">
                    <FriendsList />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Find friends" key="2">
                    <FindFriends />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Friend requests" key="3">
                    <FriendRequests />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Outgoing requests" key="4">
                    <OutgoingRequests />
                </Tabs.TabPane>
            </Tabs>
        </div>
    )
}

export default FriendsPage;

