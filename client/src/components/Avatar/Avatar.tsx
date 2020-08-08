import React, {useCallback, useState} from "react";
import {BigHead} from "@bigheads/core";
import {Button, Modal, Tooltip} from "antd";
import ConfigureAvatar from "./ConfigureAvatar/ConfigureAvatar";
import {useSelector} from "react-redux";
import {IStore} from "store/store";

const Avatar = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const avatar = useSelector((store: IStore) => store.profile.avatar);

    const handleConfigureAvatar = useCallback(() => {
        setModalVisible(true);
    }, []);

    const handleCancel = useCallback(() => {
        setModalVisible(false);
    }, []);

    return (
        <div>
            <Tooltip
                placement="bottom"
                title={
                    <Button type="link" onClick={handleConfigureAvatar}>Configure</Button>
                }>
                <BigHead
                    accessory={avatar && avatar.accessory}
                    body={avatar && avatar.body}
                    circleColor="blue"
                    clothing={avatar && avatar.clothing}
                    clothingColor={avatar && avatar.clothingColor}
                    eyebrows={avatar && avatar.eyebrows}
                    eyes={avatar && avatar.eyes}
                    facialHair={avatar && avatar.facialHair}
                    graphic={avatar && avatar.graphic}
                    hair={avatar && avatar.hair}
                    hairColor={avatar && avatar.hairColor}
                    hat={avatar && avatar.hat}
                    hatColor={avatar && avatar.hatColor}
                    lashes={avatar && avatar.lashes}
                    lipColor={avatar && avatar.lipColor}
                    mask={avatar && avatar.mask}
                    mouth={avatar && avatar.mouth}
                    skinTone={avatar && avatar.skinTone}
                />
            </Tooltip>

            <Modal
                title="Edit your profile avatar"
                width={1200}
                visible={modalVisible}
                footer={null}
                onCancel={handleCancel}
            >
                <ConfigureAvatar />
            </Modal>
        </div>
    )
}

export default Avatar;
