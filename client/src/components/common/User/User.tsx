import React, {useCallback} from "react";
import { Popover, Button } from "antd";
import { logout } from "service/auth";
import {useSelector} from "react-redux";
import {selectMyProfile} from "store/common/profile/selectors";

import "./User.css"


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
