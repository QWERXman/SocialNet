import React from "react";
import { Link } from "react-router-dom";
import { RoutesEntity } from "../../entities/Routes";
import { List } from "antd";

import './Routes.css'

interface IRoutesProps {
    items: RoutesEntity[]
}

const Routes = ({items}: IRoutesProps) => {
    return (
        <div>
            <List
                size="large"
                dataSource={items}
                renderItem={item => (
                    <List.Item key={item.id}>
                        <Link to={item.path} className="RouteItem">
                            {/*<Icon name={item.icon}/>*/}
                            {item.text}
                        </Link>
                    </List.Item>
                )}
            />
        </div>
    )
}

export default Routes;
