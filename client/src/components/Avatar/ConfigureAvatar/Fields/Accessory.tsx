import React from "react";
import {Form, Select} from "antd";
import {ISelectField} from "./Fields";

const Accessory = ({initialValue}:ISelectField) => {
    return (
        <Form.Item
            label="Accessory"
            name="accessory"
            initialValue={initialValue}
        >
            <Select>
                <Select.Option value="none">None</Select.Option>
                <Select.Option value="roundGlasses">Round Glasses</Select.Option>
                <Select.Option value="tinyGlasses">Tiny Glasses</Select.Option>
                <Select.Option value="shades">Shades</Select.Option>
            </Select>
        </Form.Item>
    )
}

export default Accessory;
