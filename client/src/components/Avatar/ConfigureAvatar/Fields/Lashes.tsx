import React from "react";
import {Form, Switch} from "antd";
import {ISwitchField} from "./Fields";

const Lashes = ({initialValue}:ISwitchField) => {
    return (
        <Form.Item
            label="Lashes"
            name="lashes"
            valuePropName="checked"
            initialValue={initialValue}
        >
            <Switch/>
        </Form.Item>
    )
}

export default Lashes;
