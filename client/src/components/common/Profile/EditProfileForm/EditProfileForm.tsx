import React, {useCallback, useState} from "react";
import {Button, DatePicker, Form, Input, Divider, Spin} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {formItemLayout} from "components/pages/LoginPage/SingIn/SingIn";
import Profile from "service/profile";
import {selectMyProfile} from "store/common/profile/selectors";
import {setProfileDataAction} from "store/common/profile/actionCreators";

import "./EditProfileForm.css"

interface IProps {
    closeModal: Function
}

const EditProfileForm = ({closeModal}: IProps) => {
    const dispatch = useDispatch();
    const [loaderVisible, setLoaderVisible] = useState(false);
    const myProfile = useSelector(selectMyProfile);

    const handleSaveData = useCallback(async ({name, secondName, status, birthday, city, email}) => {
        setLoaderVisible(true);
        const profileData = await Profile.setSelf({_id: '', name, secondName, status, birthday, city, email});
        dispatch(setProfileDataAction(profileData));
        setLoaderVisible(false);
        closeModal();
    }, [])

    if (!myProfile) {
        return null;
    }

    const {
        name,
        secondName,
        status,
        birthday,
        city,
        email,
    } = myProfile;

    return (
        <div className="EditProfileForm">
            <Spin spinning={loaderVisible}>
                <Form
                    {...formItemLayout}
                    className="EditProfileForm-Form"
                    name="basic"
                    onFinish={handleSaveData}>
                    <Form.Item
                        label="Name"
                        name="name"
                        initialValue={name}
                        rules={[{ required: true, message: 'Please input your name!' }]}
                    >
                        <Input placeholder="Ivan"/>
                    </Form.Item>
                    <Form.Item
                        label="Second name"
                        name="secondName"
                        initialValue={secondName}
                    >
                        <Input placeholder="Ivanov"/>
                    </Form.Item>

                    <Form.Item
                        label="Status"
                        name="status"
                        initialValue={status}
                    >
                        <Input placeholder="Bla bla bla"/>
                    </Form.Item>

                    <Form.Item
                        label="Birthday"
                        name="birthday"
                        initialValue={birthday}
                    >
                        <DatePicker />
                    </Form.Item>

                    <Form.Item
                        label="City"
                        name="city"
                        initialValue={city}
                    >
                        <Input placeholder="Moscow"/>
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        initialValue={email}
                        rules={[{ type: 'email', message: 'Enter a valid email!' }]}
                    >
                        <Input placeholder="ya@pochta.ru"/>
                    </Form.Item>

                    <Divider className="footerDivider"/>

                    <Button type="primary" htmlType="submit">
                        Save
                    </Button>
                </Form>
            </Spin>
        </div>
    )
}

export default EditProfileForm;
