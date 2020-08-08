import React from "react";
import {useSelector} from 'react-redux';
import { Row, Col } from 'antd';
import {IStore} from 'store/store';
import EditProfile from "./EditProfile/EditProfile";
import Avatar from "components/Avatar/Avatar";

import './Profile.css'

const Profile = () => {

    // useEffect(() => {
    //     console.log(123);
    //     // NewsService.getMyNews().then(data => this.props.setMyNewsList(data))
    // }, [])

    const profileData = useSelector((store: IStore) => store.profile);
    return (
        <div className="Profile">

            <div className="ProfileAvatar">
                <Avatar />
            </div>

            <div className="FlexGrow-1">
                <div className="Profile__Data">
                    <div className="Profile-Data__UserName">{profileData.name} {profileData.secondName}</div>

                    <div className="Profile-Data__Separator"></div>

                    <Row>
                        <Col span={2}>Status:</Col>
                        <Col span={22}>{profileData.status}</Col>
                    </Row>
                    <Row>
                        <Col span={2}>Birthday:</Col>
                        <Col span={22}>{(profileData.birthday && profileData.birthday.format('DD.MM.YYYY')) || ''}</Col>
                    </Row>
                    <Row>
                        <Col span={2}>City:</Col>
                        <Col span={22}>{profileData.city}</Col>
                    </Row>
                    <Row>
                        <Col span={2}>Email:</Col>
                        <Col span={22}>{profileData.email}</Col>
                    </Row>

                    <EditProfile />
                </div>

                <div className="Profile__Posts">
                    {/*<CreateNews />*/}
                    {/*<ProfileNewsList className="Profile-Posts__ProfileNewsList"*/}
                    {/*                 newsList={this.props.newsList}/>*/}
                </div>
            </div>
        </div>
    );
}

export default Profile;
