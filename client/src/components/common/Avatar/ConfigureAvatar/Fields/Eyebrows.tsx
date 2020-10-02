import React from "react";
import {Form, Select} from "antd";
import {ISelectField} from "./Fields";

const Eyebrows = ({initialValue}:ISelectField) => {
    return (
        <Form.Item
            label="Eyebrows"
            name="eyebrows"
            initialValue={initialValue}
        >
            <Select>
                <Select.Option value="raised">Raised</Select.Option>
                <Select.Option value="leftLowered">Left Lowered</Select.Option>
                <Select.Option value="serious">Serious</Select.Option>
                <Select.Option value="angry">Angry</Select.Option>
                <Select.Option value="concerned">Concerned</Select.Option>
            </Select>
        </Form.Item>
    )
}

export default Eyebrows;
