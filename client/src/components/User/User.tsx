import React, {useCallback} from "react";
import { Popover, Button } from "antd";
import { logout } from "service/auth";
import {IStore} from 'store/store';
import {useSelector} from "react-redux";
import "./User.css"


const User = () => {
    const userName = useSelector((state: IStore) => state.profile.name)
    const userSecondName = useSelector((state: IStore) => state.profile.secondName)

    const userLogout = useCallback(() => logout(), []);

    const content = (
        <Button onClick={userLogout}>Logout</Button>
    );

    return (
        <Popover className="User" content={content} title={`${userName} ${userSecondName}`} trigger="click">
            <Button type="link">{userName}</Button>
        </Popover>
    )
}

export default User;
