import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { connect } from 'react-redux';

//import Components
import Sidebar from './Components/Sidebar/index'

//import Views
import Home from './Views/Home/index'
import Users from './Views/Users/index'

//libraries frameworks
import "antd/dist/antd.css";
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;


const App = (props) => {  

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Sidebar />
          <Content style={{ margin: '0 16px' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Route exact path="/" component={ Home } />
              <Route path="/users" component={ Users } />
            </div>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
