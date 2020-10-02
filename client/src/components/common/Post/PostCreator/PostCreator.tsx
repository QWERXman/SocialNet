import React, {useCallback, useState} from "react";
import {Button, Modal} from "antd";
import {PlusCircleOutlined} from "@ant-design/icons";
import CreatePostModal from "../CreatePostModal/CreatePostModal";

interface IPostCreator {
    className?: string
}

const PostCreator = ({className}: IPostCreator) => {
    const [modalVisible, setModalVisible] = useState(false);

    const showModal = useCallback(() => {
        setModalVisible(true)
    }, []);

    const handleCancel = useCallback(() => {
        setModalVisible(false)
    }, []);

    return (
        <div className={className}>
            <Button
                type="primary"
                shape="round"
                icon={<PlusCircleOutlined translate="span"/>}
                size="small"
                onClick={showModal}>
                Create post
            </Button>
            <Modal
                title="Create post"
                visible={modalVisible}
                footer={null}
                onCancel={handleCancel}
            >
                <CreatePostModal closeModal={handleCancel}/>
            </Modal>
        </div>
    )
}

export default PostCreator;
