import React from "react";
import {Form, Select} from "antd";
import {ISelectField} from "./Fields";

const Clothing = ({initialValue}:ISelectField) => {
    return (
        <Form.Item
            label="Clothing"
            name="clothing"
            initialValue={initialValue}
        >
            <Select>
                <Select.Option value="naked">Naked</Select.Option>
                <Select.Option value="shirt">Shirt</Select.Option>
                <Select.Option value="dressShirt">DressShirt</Select.Option>
                <Select.Option value="vneck">Vneck</Select.Option>
                <Select.Option value="tankTop">TankTop</Select.Option>
                <Select.Option value="dress">Dress</Select.Option>
            </Select>
        </Form.Item>
    )
}

export default Clothing;
