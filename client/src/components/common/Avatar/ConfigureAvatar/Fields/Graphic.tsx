import React from "react";
import {Form, Select} from "antd";
import {ISelectField} from "./Fields";

const Graphic = ({initialValue}:ISelectField) => {
    return (
        <Form.Item
            label="Graphic"
            name="graphic"
            initialValue={initialValue}
        >
            <Select>
                <Select.Option value="none">None</Select.Option>
                <Select.Option value="redwood">Red Wood</Select.Option>
                <Select.Option value="gatsby">Gatsby</Select.Option>
                <Select.Option value="vue">Vue</Select.Option>
                <Select.Option value="react">React</Select.Option>
                <Select.Option value="graphQL">Graph QL</Select.Option>
            </Select>
        </Form.Item>
    )
}

export default Graphic;
