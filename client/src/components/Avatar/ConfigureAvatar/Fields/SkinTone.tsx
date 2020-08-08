import React from "react";
import {Form, Select} from "antd";
import {ISelectField} from "./Fields";

const SkinTone = ({initialValue}:ISelectField) => {
    return (
        <Form.Item
            label="Skin Tone"
            name="skinTone"
            initialValue={initialValue}
        >
            <Select>
                <Select.Option value="light">Light</Select.Option>
                <Select.Option value="yellow">Yellow</Select.Option>
                <Select.Option value="brown">Brown</Select.Option>
                <Select.Option value="dark">Dark</Select.Option>
                <Select.Option value="red">Red</Select.Option>
                <Select.Option value="black">Black</Select.Option>
            </Select>
        </Form.Item>
    )
}

export default SkinTone;
