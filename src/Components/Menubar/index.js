import { Menu } from "antd"

import {
    DesktopOutlined,
    PieChartOutlined,
    UserOutlined,
  } from '@ant-design/icons';

const Menubar = () => {
    return (          
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
            REDDIT TEST
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
            Home
            </Menu.Item>
            <Menu.Item key="9" icon={<UserOutlined />}>
            User
            </Menu.Item>
        </Menu>
    )
 }

export default Menubar;