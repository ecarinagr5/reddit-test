import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

//import Views
import Home from './Views/Home/index'
import Users from './Views/Users/index'
import Login from './Views/Login/index'
import Post from './Views/Post/index'
import HeaderLayout from './Components/HeaderLayout/index'

//libraries frameworks
import "antd/dist/antd.css";
import { Layout } from 'antd';
const { Content, Footer } = Layout;

const App = (props) => {  


  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Layout className="site-layout">
          <HeaderLayout />
          <Content style={{ margin: '50px 16px' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Route exact path="/login" component={ Login } />
              <Route path="/home" component={ Home } />
              <Route path="/users" component={ Users } />
              <Route path="/post/:id" component={ Post } />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}> Created by Carina González</Footer>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
