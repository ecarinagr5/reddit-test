import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { Link, useHistory } from "react-router-dom";

import "antd/dist/antd.css";
import "./header.css";
import logo from '../../Assets/images/reddit.png'

import { Layout } from 'antd';
const { Header } = Layout;

const HeaderLayout = ( ) => {

    const history = useHistory();
    const [ menu , setMenu ] = useState('/');

    useEffect(() => {
        return history.listen((location) => {
            setMenu(location.pathname)
        })
    },[history])

    return (          
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            
            <Link to="/">
                <div className="logo"> 
                    <picture>
                        <img src={logo} alt="Reddit Test" className="logo-icon" />
                    </picture>
                </div>
            </Link>
            
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Link to="/home"><Menu.Item key="1" className={ menu === '/home' ? 'enable':'disable' }>Home</Menu.Item></Link>
                <Link to="/users"><Menu.Item key="2" className={ menu === '/users' ? 'enable':'disable' }>Usuarios</Menu.Item></Link>
            </Menu>
        </Header>
    )
 }

export default HeaderLayout;