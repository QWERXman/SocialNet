import React, {useCallback, useState} from "react";
import {Button, Form, Input, Spin} from "antd";
import {formItemLayout} from "components/pages/LoginPage/SingIn/SingIn";
import {MessagesService} from "service/messages";
import {IProfileEntity} from "../../../../entities/Profile";

interface IWriteMessageModal {
    hideModal: Function,
    profile: IProfileEntity
}

const WriteMessageModal = ({hideModal, profile}: IWriteMessageModal) => {
    const [loaderVisible, setLoaderVisible] = useState(false);

    const handleSendMessage = useCallback((message) => {
        MessagesService.sendMessage({text: message.text, profileId: profile._id}).then(() => {
            setLoaderVisible(false);
            hideModal();
        });
    }, []);

    return (
        <div>
            <Spin spinning={loaderVisible}>
                <Form
                    {...formItemLayout}
                    name="basic"
                    onFinish={handleSendMessage}>
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
                        Send
                    </Button>
                </Form>
            </Spin>
        </div>
    )
}

export default WriteMessageModal;
