import React from 'react';
import { Route } from 'react-router-dom';

//import Components
import Sidebar from './Components/Sidebar/index'

//import Views
import Home from './Views/Home/index'

//libraries frameworks
import "antd/dist/antd.css";
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;


const App = () => {



  return (
    <React.Fragment>
      <Layout style={{ minHeight: '100vh' }}>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Sidebar />
          <Content style={{ margin: '0 16px' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Home />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>REDDIT Carina González</Footer>
        </Layout>
      </Layout>
    </React.Fragment>
  );
}

export default App;
