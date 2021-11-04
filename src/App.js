import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

//import Views
import Home from './Views/Home/index'
import Users from './Views/Users/index'
import Login from './Views/Login/index'
import Post from './Views/Post/index'

//libraries frameworks
import "antd/dist/antd.css";
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;


const App = (props) => {  

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Layout className="site-layout">
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
              <Link to="/"><Menu.Item key="1">Home</Menu.Item></Link>
              <Link to="/users"><Menu.Item key="2">Usuarios</Menu.Item></Link>
              </Menu>
          </Header>
          <Content style={{ margin: '50px 16px' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Route exact path="/" component={ Home } />
              <Route path="/users" component={ Users } />
              <Route path="/login" component={ Login } />
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
