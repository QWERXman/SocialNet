import React, {useCallback, useEffect, useState} from "react";
import {Button, Form, Input, Spin} from "antd";
import {formItemLayout} from "components/pages/LoginPage/SingIn/SingIn";
import {IProfileEntity} from "../../../../entities/Profile";
import {sendMessageAction} from "store/common/messages/actionCreators";
import {useDispatch, useSelector} from "react-redux";
import {IRootState} from "store/store";
import {LoadingState} from "../../../../store/state";

interface IWriteMessageModal {
    hideModal: Function,
    profile: IProfileEntity
}

const WriteMessageModal = ({hideModal, profile}: IWriteMessageModal) => {
    const dispatch = useDispatch();
    const loadingState = useSelector((state: IRootState) => state.dialogs.writeMessageLoader);
    const [messageIsSend, setMessageIsSend] = useState(false);

    const handleSendMessage = useCallback(async (message) => {
        dispatch(sendMessageAction({text: message.text, profileId: profile._id}));
        setMessageIsSend(true);
    }, []);

    useEffect(() => {
        if (loadingState === LoadingState.LOADED && messageIsSend) {
            hideModal();
        }
    }, [loadingState]);

    return (
        <div>
            <Spin spinning={loadingState === LoadingState.LOADING}>
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
