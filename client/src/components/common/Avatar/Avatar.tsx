import React, {useCallback, useState} from "react";
import {AvatarProps, BigHead} from "@bigheads/core";
import {Button, Modal, Tooltip} from "antd";
import ConfigureAvatar from "./ConfigureAvatar/ConfigureAvatar";
import {useSelector} from "react-redux";
import {modalZIndex} from "constants/common";
import {selectMyProfile} from "store/common/profile/selectors";


interface IAvatarProps {
    configurable?: boolean,
    config?: AvatarProps,
    className?: string
}

const Avatar = ({configurable=false, config, className}: IAvatarProps) => {
    const [modalVisible, setModalVisible] = useState(false);
    const myProfile = useSelector(selectMyProfile);

    const handleConfigureAvatar = useCallback(() => {
        setModalVisible(true);
    }, []);

    const handleCancel = useCallback(() => {
        setModalVisible(false);
    }, []);

    if(!myProfile) {
        return null;
    }

    const selfAvatar = myProfile.avatar;
    const avatar = config ? config : selfAvatar;
    const tooltipStyle = configurable ? {} : {display: 'none'}

    return (
        <div className={className}>
            <Tooltip
                placement="bottom"
                overlayStyle={tooltipStyle}
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

            {
                configurable &&
                <Modal
                    title="Edit your profile avatar"
                    width={1200}
                    visible={modalVisible}
                    footer={null}
                    onCancel={handleCancel}
                    zIndex={modalZIndex}
                >
                    <ConfigureAvatar />
                </Modal>
            }

        </div>
    )
}

export default Avatar;
