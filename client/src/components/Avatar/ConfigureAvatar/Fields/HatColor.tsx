import React from "react";
import {Form, Select} from "antd";
import {ISelectField} from "./Fields";

const HatColor = ({initialValue}:ISelectField) => {
    return (
        <Form.Item
            label="Hat Color"
            name="hatColor"
            initialValue={initialValue}
        >
            <Select>
                <Select.Option value="white">white</Select.Option>
                <Select.Option value="blue">blue</Select.Option>
                <Select.Option value="black">black</Select.Option>
                <Select.Option value="green">green</Select.Option>
                <Select.Option value="red">red</Select.Option>
            </Select>
        </Form.Item>
    )
}

export default HatColor;
