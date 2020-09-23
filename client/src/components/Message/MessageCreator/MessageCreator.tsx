import React, {useCallback, useRef, useState} from "react";
import {Button, Modal} from "antd";
import WriteMessageModal from "../WriteMessageModal/WriteMessageModal";
import {IProfileEntity} from "entities/Profile";
import {modalZIndex} from 'constants/common'
interface IMessageCreator {
    profile: IProfileEntity
}

const MessageCreator = ({profile}: IMessageCreator) => {
    const [modalVisible, setModalVisible] = useState(false);

    const showModal = useCallback(() => {
        setModalVisible(true)
    }, []);

    const handleCancel = useCallback(() => {
        setModalVisible(false)
    }, []);

    return (
        <div>
            <Button
                onClick={showModal}
                size={'small'}
            >
                Write a message...
            </Button>
            <Modal
                title="Create post"
                zIndex={modalZIndex}
                visible={modalVisible}
                footer={null}
                onCancel={handleCancel}
            >
                <WriteMessageModal hideModal={handleCancel} profile={profile}/>
            </Modal>
        </div>
    )
}

export default MessageCreator;
