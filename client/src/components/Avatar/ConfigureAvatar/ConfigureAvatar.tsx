import React, {useCallback, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AvatarProps, BigHead} from "@bigheads/core";
import {Button, Form, Spin} from "antd";
import { Row, Col } from 'antd';
import ProfileService from "service/profile";
import {setProfileAvatar} from "store/actions/pages/Profile/profileActions";
import Fields from './Fields/Fields'
import {IStore} from 'store/store';

import "./ConfigureAvatar.css"

const ConfigureAvatar = () => {
    const avatar = useSelector((store: IStore) => store.profile.avatar)

    const [mask, setMask] = useState(!!(avatar && avatar.mask));
    const [body, setBody]:any = useState((avatar && avatar.body) || 'chest');
    const [lipColor, setLipColor]:any = useState((avatar && avatar.lipColor) || 'red');
    const [skinTone, setSkinTone]:any = useState((avatar && avatar.skinTone) || 'light');
    const [hair, setHair]:any = useState((avatar && avatar.hair) || 'none');
    const [hairColor, setHairColor]:any = useState((avatar && avatar.hairColor) || 'blonde');
    const [clothing, setClothing]:any = useState((avatar && avatar.clothing) || 'naked');
    const [clothingColor, setClothingColor]:any = useState((avatar && avatar.clothingColor) || 'white');
    const [graphic, setGraphic]:any = useState((avatar && avatar.graphic) || 'none');
    const [eyes, setEyes]:any = useState((avatar && avatar.eyes) || 'normal');
    const [eyebrows, setEyebrows]:any = useState((avatar && avatar.eyebrows) || 'raised');
    const [mouth, setMouth]:any = useState((avatar && avatar.mouth) || 'grin');
    const [facialHair, setFacialHair]:any = useState((avatar && avatar.facialHair) || 'none');
    const [accessory, setAccessory]:any = useState((avatar && avatar.accessory) || 'none');
    const [hat, setHat]:any = useState((avatar && avatar.hat) || 'none');
    const [hatColor, setHatColor]:any = useState((avatar && avatar.hatColor) || 'white');
    const [lashes, setLashes]:any = useState((avatar && avatar.lashes) || false);

    const [loaderVisible, setLoaderVisible] = useState(false);
    const dispatch = useDispatch();

    const handleSaveData = useCallback((data) => {
        setLoaderVisible(true);
        ProfileService.setAvatar(data).then((editedAvatar:AvatarProps) => {
            dispatch(setProfileAvatar(editedAvatar));
            setLoaderVisible(false);
        });
    }, []);

    const handleValuesChange = useCallback((changedValues) => {
        const changedFields = Object.keys(changedValues);

        changedFields.forEach((item) => {
            eval('set' + item[0].toUpperCase() + item.slice(1))(changedValues[item]);
        });
    }, []);

    return (
        <Spin spinning={loaderVisible}>
            <div className="ConfigureAvatar">
                <div className="ConfigureAvatar-ColumnFields">
                    <Form
                        labelCol={{
                            xs: { span: 24 },
                            sm: { span: 6 },
                        }}
                        onFinish={handleSaveData}
                        onValuesChange={handleValuesChange}>

                        <Row>
                            <Col span={12}><Fields.Mask initialValue={mask}/></Col>
                            <Col span={12}><Fields.Lashes initialValue={lashes}/></Col>
                        </Row>
                        <Row>
                            <Col span={12}><Fields.Body initialValue={body}/></Col>
                            <Col span={12}><Fields.LipColor initialValue={lipColor}/></Col>
                        </Row>
                        <Row>
                            <Col span={12}><Fields.SkinTone initialValue={skinTone}/></Col>
                            <Col span={12}><Fields.Hair initialValue={hair}/></Col>
                        </Row>
                        <Row>
                            <Col span={12}><Fields.HairColor initialValue={hairColor}/></Col>
                            <Col span={12}><Fields.Clothing initialValue={clothing}/></Col>
                        </Row>
                        <Row>
                            <Col span={12}><Fields.ClothingColor initialValue={clothingColor}/></Col>
                            <Col span={12}><Fields.Graphic initialValue={graphic}/></Col>
                        </Row>
                        <Row>
                            <Col span={12}><Fields.Eyes initialValue={eyes}/></Col>
                            <Col span={12}><Fields.Eyebrows initialValue={eyebrows}/></Col>
                        </Row>
                        <Row>
                            <Col span={12}><Fields.Mouth initialValue={mouth}/></Col>
                            <Col span={12}><Fields.FacialHair initialValue={facialHair}/></Col>
                        </Row>
                        <Row>
                            <Col span={12}><Fields.Hat initialValue={hat}/></Col>
                            <Col span={12}><Fields.HatColor initialValue={hatColor}/></Col>
                        </Row>
                        <Row>
                            <Col span={12}><Fields.Accessory initialValue={accessory}/></Col>
                        </Row>

                        <Button type="primary" htmlType="submit">
                            Save
                        </Button>
                    </Form>
                </div>
                <div className="ConfigureAvatar-ColumnAvatar">
                    <BigHead
                        accessory={accessory}
                        body={body}
                        circleColor="blue"
                        clothing={clothing}
                        clothingColor={clothingColor}
                        eyebrows={eyebrows}
                        eyes={eyes}
                        facialHair={facialHair}
                        graphic={graphic}
                        hair={hair}
                        hairColor={hairColor}
                        hat={hat}
                        hatColor={hatColor}
                        lashes={lashes}
                        lipColor={lipColor}
                        mask={mask}
                        mouth={mouth}
                        skinTone={skinTone}
                    />
                </div>
            </div>
        </Spin>
    );
}

export default ConfigureAvatar;
