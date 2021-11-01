import React, {useState} from 'react';
import { Layout } from 'antd';

import Menubar from '../Menubar/index'

const { Sider } = Layout;
const Sidebar = () => {

    const [collapsed, setCollapsed] = useState(false);
    const onCollapse = (collapsed) => setCollapsed(collapsed);

    return(
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <div className="logo" />
            <Menubar />
        </Sider>
    )
}

export default Sidebar;