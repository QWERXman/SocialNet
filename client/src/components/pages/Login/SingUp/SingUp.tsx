import React, {useCallback, useState} from "react";
import { Form, Input, Button, Alert } from 'antd';
import { login, registration } from 'service/auth'
import {formItemLayout, tailFormItemLayout} from "../SingIn/SingIn";

const SingUp = () => {
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);

    const onFinish = useCallback(({username, password}) => {
        registration(username, password).then((response) => {
            setShowSuccess(true);
            setShowError(false);
        }).catch(() => {
            setShowError(true);
            setShowSuccess(false);
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
                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(rule, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('The two passwords that you entered do not match!');
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>

            {showSuccess && <Alert message="User successfully created" type="success" />}
            {showError && <Alert message="Something went wrong, try again" type="error" />}

        </div>
    )
}

export default SingUp;
