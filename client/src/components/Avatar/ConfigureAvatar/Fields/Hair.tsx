import React from "react";
import {Form, Select} from "antd";
import {ISelectField} from "./Fields";

const Hair = ({initialValue}:ISelectField) => {
    return (
        <Form.Item
            label="Hair"
            name="hair"
            initialValue={initialValue}
        >
            <Select>
                <Select.Option value="none">None</Select.Option>
                <Select.Option value="long">Long</Select.Option>
                <Select.Option value="bun">Bun</Select.Option>
                <Select.Option value="short">Short</Select.Option>
                <Select.Option value="pixie">Pixie</Select.Option>
                <Select.Option value="balding">Balding</Select.Option>
                <Select.Option value="buzz">Buzz</Select.Option>
                <Select.Option value="afro">Afro</Select.Option>
                <Select.Option value="bob">Bob</Select.Option>
            </Select>
        </Form.Item>
    )
}

export default Hair;
