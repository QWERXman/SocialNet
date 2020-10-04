import React, {MutableRefObject, RefObject, useCallback, useRef, useState} from "react";
import {Button, DatePicker, Divider, Form, Input, Spin} from "antd";
import {formItemLayout} from "../../../pages/LoginPage/SingIn/SingIn";
import {PostService} from "../../../../service/post";
import {IPost} from "../../../../store/common/news/state";
import {useDispatch, useSelector} from "react-redux";
import {createNewPostAction} from "../../../../store/common/profile/actionCreators";
import {selectMyProfile} from "../../../../store/common/profile/selectors";
import {FormInstance} from "antd/es/form";

interface ICreatePostModal {
    closeModal: Function
}

const CreatePostModal = ({closeModal}:ICreatePostModal) => {
    const dispatch = useDispatch();
    const formRef: any = useRef();
    const [loaderVisible, setLoaderVisible] = useState(false);

    const handleSavePost = useCallback((post) => {
        setLoaderVisible(true);
        PostService.create(post).then((post: IPost) => {
            dispatch(createNewPostAction(post));
            setLoaderVisible(false);
            formRef.current.resetFields();
            closeModal();
        });
    }, []);

    return (
        <div>
            <Spin spinning={loaderVisible}>
                <Form
                    {...formItemLayout}
                    ref={formRef}
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
