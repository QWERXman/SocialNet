import React from "react";
import {Form, Select} from "antd";
import {ISelectField} from "./Fields";

const ClothingColor = ({initialValue}:ISelectField) => {
    return (
        <Form.Item
            label="Clothing color"
            name="clothingColor"
            initialValue={initialValue}
        >
            <Select>
                <Select.Option value="white">White</Select.Option>
                <Select.Option value="blue">Blue</Select.Option>
                <Select.Option value="black">Black</Select.Option>
                <Select.Option value="green">Green</Select.Option>
                <Select.Option value="red">Red</Select.Option>
            </Select>
        </Form.Item>
    )
}

export default ClothingColor;
