import React from "react";
import {Form, Select} from "antd";
import {ISelectField} from "./Fields";

const HairColor = ({initialValue}:ISelectField) => {
    return (
        <Form.Item
            label="Hair Color"
            name="hairColor"
            initialValue={initialValue}
        >
            <Select>
                <Select.Option value="blonde">Blonde</Select.Option>
                <Select.Option value="orange">Orange</Select.Option>
                <Select.Option value="black">Black</Select.Option>
                <Select.Option value="white">White</Select.Option>
                <Select.Option value="brown">Brown</Select.Option>
                <Select.Option value="blue">Blue</Select.Option>
                <Select.Option value="pink">Pink</Select.Option>
            </Select>
        </Form.Item>
    )
}

export default HairColor;
