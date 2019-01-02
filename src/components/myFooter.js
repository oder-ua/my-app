import React, { Component } from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

class myFooter extends Component{
  render(){
    return (
      <Footer style={{ textAlign: 'center', backgroundColor: '#001529' }}>
        <span style={{float: 'left', color: 'white'}}>
          ©Dish someApp v 0.0.3 Build: 14.5.7 06/06/2006 12:12 (UTC+2)
        </span>
        <span style={{float: 'right', color: 'white'}}>Created by O. Derun</span>
      </Footer>
    );
  }
}

export default myFooter;