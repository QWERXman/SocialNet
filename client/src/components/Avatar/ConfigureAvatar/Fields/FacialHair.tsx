import React from "react";
import {Form, Select} from "antd";
import {ISelectField} from "./Fields";

const FacialHair = ({initialValue}:ISelectField) => {
    return (
        <Form.Item
            label="Facial Hair"
            name="facialHair"
            initialValue={initialValue}
        >
            <Select>
                <Select.Option value="none">None</Select.Option>
                <Select.Option value="none2">None 2</Select.Option>
                <Select.Option value="none3">None 3</Select.Option>
                <Select.Option value="stubble">Stubble</Select.Option>
                <Select.Option value="mediumBeard">Medium Beard</Select.Option>
            </Select>
        </Form.Item>
    )
}

export default FacialHair;
