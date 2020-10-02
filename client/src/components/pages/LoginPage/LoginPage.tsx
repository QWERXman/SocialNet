import React from 'react'
import { Tabs } from 'antd';
import SingIn from './SingIn/SingIn'
import SingUp from './SingUp/SingUp'

import './LoginPage.css';

const LoginPage = () => {
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

export default LoginPage;
