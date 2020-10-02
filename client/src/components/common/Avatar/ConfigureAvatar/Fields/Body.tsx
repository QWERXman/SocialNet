import React from "react";
import {Form, Select} from "antd";
import {ISelectField} from "./Fields";

const Body = ({initialValue}:ISelectField) => {
    return (
        <Form.Item
            label="Body"
            name="body"
            initialValue={initialValue}
        >
            <Select>
                <Select.Option value="chest">Chest</Select.Option>
                <Select.Option value="breasts">Breasts</Select.Option>
            </Select>
        </Form.Item>
    )
}

export default Body;
