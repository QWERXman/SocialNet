import React, {useCallback, useState} from "react";
import {Button, DatePicker, Divider, Form, Input, Spin} from "antd";
import {formItemLayout} from "../../pages/Login/SingIn/SingIn";
import {PostService} from "../../../service/post";

interface ICreatePostModal {
    closeModal: Function
}

const CreatePostModal = ({closeModal}:ICreatePostModal) => {
    const [loaderVisible, setLoaderVisible] = useState(false);

    const handleSavePost = useCallback((post) => {
        setLoaderVisible(true);
        PostService.create(post).then(() => {
            setLoaderVisible(false);
            closeModal();
        });
    }, []);

    return (
        <div>
            <Spin spinning={loaderVisible}>
                <Form
                    {...formItemLayout}
                    name="basic"
                    onFinish={handleSavePost}>
                    <Form.Item
                        label="Title"
                        name="title"
                        rules={[{ required: true, message: 'Please input title!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Text"
                        name="text"
                        rules={[{ required: true, message: 'Please input text!' }]}
                    >
                        <Input.TextArea
                            autoSize={{ minRows: 2, maxRows: 6 }}
                        />
                    </Form.Item>

                    <Button type="primary" htmlType="submit">
                        Create
                    </Button>
                </Form>
            </Spin>
        </div>
    )
}

export default CreatePostModal;
