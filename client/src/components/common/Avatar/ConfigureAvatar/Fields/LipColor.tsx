import React from "react";
import {Form, Select} from "antd";
import {ISelectField} from "./Fields";

const LipColor = ({initialValue}:ISelectField) => {
    return (
        <Form.Item
            label="Lip Color"
            name="lipColor"
            initialValue={initialValue}
        >
            <Select>
                <Select.Option value="red">Red</Select.Option>
                <Select.Option value="purple">Purple</Select.Option>
                <Select.Option value="pink">Pink</Select.Option>
                <Select.Option value="turqoise">Turqoise</Select.Option>
                <Select.Option value="green">Green</Select.Option>
            </Select>
        </Form.Item>
    )
}

export default LipColor;
