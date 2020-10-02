import React from "react";
import {Form, Switch} from "antd";
import {ISwitchField} from "./Fields";

const Mask = ({initialValue}:ISwitchField) => {
    return (
        <Form.Item
            label="Mask"
            name="mask"
            valuePropName="checked"
            initialValue={initialValue}
        >
            <Switch />
        </Form.Item>
    )
}

export default Mask;
