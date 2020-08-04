import React from 'react'
import { Tabs } from 'antd';
import SingIn from './SingIn/SingIn'
import SingUp from './SingUp/SingUp'

import './Login.css';

const Login = () => {
    return (
        <div className="LoginPage">
            <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab="Sing In" key="1">
                    <SingIn />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Sing Up" key="2">
                    <SingUp />
                </Tabs.TabPane>
            </Tabs>
        </div>
  )
}

export default Login;
