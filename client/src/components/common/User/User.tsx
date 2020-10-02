import React, {useCallback} from "react";
import { Popover, Button } from "antd";
import { logout } from "service/auth";
import {IStore} from 'store/store';
import {useSelector} from "react-redux";
import "./User.css"
import {selectMyProfile} from "../../../store2/common/profile/selectors";


const User = () => {
    const myProfile = useSelector(selectMyProfile);
    const userLogout = useCallback(() => logout(), []);

    if (!myProfile) {
        return null;
    }

    const logoutBtn = (
        <Button onClick={userLogout}>Logout</Button>
    );

    const userName = myProfile.name;
    const userSecondName = myProfile.secondName || '';

    return (
        <Popover className="User" content={logoutBtn} title={`${userName} ${userSecondName}`} trigger="click">
            <Button type="link">{userName}</Button>
        </Popover>
    )
}

export default User;
