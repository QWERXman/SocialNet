import React from "react";
import {Form, Select} from "antd";
import {ISelectField} from "./Fields";

const Eyes = ({initialValue}:ISelectField) => {
    return (
        <Form.Item
            label="Eyes"
            name="eyes"
            initialValue={initialValue}
        >
            <Select>
                <Select.Option value="normal">Normal</Select.Option>
                <Select.Option value="leftTwitch">Left Twitch</Select.Option>
                <Select.Option value="happy">Happy</Select.Option>
                <Select.Option value="content">Content</Select.Option>
                <Select.Option value="squint">Squint</Select.Option>
                <Select.Option value="simple">Simple</Select.Option>
                <Select.Option value="dizzy">Dizzy</Select.Option>
                <Select.Option value="wink">Wink</Select.Option>
                <Select.Option value="heart">Heart</Select.Option>
            </Select>
        </Form.Item>
    )
}

export default Eyes;
