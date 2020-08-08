import React from "react";
import {Form, Select} from "antd";
import {ISelectField} from "./Fields";

const Mouth = ({initialValue}:ISelectField) => {
    return (
        <Form.Item
            label="Mouth"
            name="mouth"
            initialValue={initialValue}
        >
            <Select>
                <Select.Option value="grin">grin</Select.Option>
                <Select.Option value="openSmile">Open Smile</Select.Option>
                <Select.Option value="lips">Lips</Select.Option>
                <Select.Option value="open">Open</Select.Option>
                <Select.Option value="serious">Serious</Select.Option>
                <Select.Option value="tongue">Tongue</Select.Option>
            </Select>
        </Form.Item>
    )
}

export default Mouth;
