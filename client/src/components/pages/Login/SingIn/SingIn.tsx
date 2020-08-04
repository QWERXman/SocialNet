import React, {useCallback, useState} from "react";
import {Form, Input, Button, Alert} from 'antd';
import { login } from 'service/auth'
import Axios from "axios";

export const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

export const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 6,
        },
    },
};

const SingIn = () => {
    const [showError, setShowError] = useState(false);

    const onFinish = useCallback(({username, password}) => {
        login(username, password).then((response) => {
            window.localStorage.uathToken = response.data.token;
            Axios.defaults.headers = {
                'Authorization': 'Token ' + response.data.token,
                'Content-Type': 'application/json'
            };
            window.location.reload();
        }).catch(() => {
            setShowError(true)
        });
    }, []);

    return (
        <div>
            <Form
                {...formItemLayout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}>
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>

            {showError && <Alert message="Something went wrong, try again" type="error" />}
        </div>
    )
}

export default SingIn;
