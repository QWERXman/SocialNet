import React from "react";
import {Form, Select} from "antd";
import {ISelectField} from "./Fields";

const Hat = ({initialValue}:ISelectField) => {
    return (
        <Form.Item
            label="Hat"
            name="hat"
            initialValue={initialValue}
        >
            <Select>
                <Select.Option value="none">None</Select.Option>
                <Select.Option value="none2">None 2</Select.Option>
                <Select.Option value="none3">None 3</Select.Option>
                <Select.Option value="none4">None 4</Select.Option>
                <Select.Option value="none5">None 5</Select.Option>
                <Select.Option value="beanie">Beanie</Select.Option>
                <Select.Option value="turban">Turban</Select.Option>
            </Select>
        </Form.Item>
    )
}

export default Hat;
