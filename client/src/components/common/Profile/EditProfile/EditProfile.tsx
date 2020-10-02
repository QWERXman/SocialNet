import React, {useCallback, useState} from "react";
import {Button, Modal} from "antd";
import EditProfileForm from "../EditProfileForm/EditProfileForm";
import { EditOutlined } from "@ant-design/icons";
import {modalZIndex} from "../../../../constants/common";

const EditProfile = () => {
    const [modalVisible, setModalVisible] = useState(false)

    const handleCancel = useCallback(() => {
        setModalVisible(false)
    }, []);

    const showModal = useCallback(() => {
        setModalVisible(true)
    }, []);

    return (
        <>
            <Button
                className="EditButton"
                type="link"
                shape="round"
                icon={<EditOutlined translate="span"/>}
                size="small"
                onClick={showModal}>
                Edit
            </Button>
            <Modal
                title="Edit your profile"
                visible={modalVisible}
                footer={null}
                onCancel={handleCancel}
                zIndex={modalZIndex}
            >
                <EditProfileForm closeModal={handleCancel}/>
            </Modal>
        </>
    )
}

export default EditProfile;
