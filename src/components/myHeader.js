import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom";
import { Icon } from 'antd';

//username через меню-итем
const { Header } = Layout;

const dishSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 95.3125 40.974609" width="80px" style={{margin: '0px 0px -12px 0px'}}>
    <path d="m120.61 493.55c-2.239 0-4.0547-1.8162-4.0547-4.0562s1.8157-4.0547 4.0547-4.0547c2.24 0 4.0547 1.8147 4.0547 4.0547s-1.8147 4.0562-4.0547 4.0562zm29.075-0.0141-0.0719-0.0312-0.19844-0.0797c-0.982-0.403-4.7938-1.5401-6.5438-2.0281l-0.425-0.11719v-1.8359l0.64532 0.0719c0.387 0.044 0.687 0.0437 1.1 0.0437 0.432 0 0.7385-0.0908 0.9125-0.26875 0.293-0.297 0.28512-0.88482 0.27812-1.3578 0-0.003-0.003-0.21093-0.003-0.21093v-21.883c0-2.975-0.18481-3.234-2.4578-3.475l-0.52344-0.0547v-1.8016h10.795v1.8469l-0.0953 0.009c-2.085 0.222-2.6453 0.28313-2.6453 3.4281v11.031c0.261 0.324 2.1795 2.5859 4.5375 2.5859 2.047 0 2.9578-1.3858 2.9578-4.4938v-9.1703c0-2.888-0.49869-3.2197-2.6297-3.3797l-0.0422-0.003v-1.8547h10.536v1.7672l-0.47813 0.0828c-2.049 0.362-2.3141 0.4115-2.3141 3.3875v9.3578c0 5.297-2.1237 7.9828-6.3047 7.9828-2.364 0-4.5205-1.0078-6.2625-2.8938v12.884l-0.76719 0.45937zm-40.483-0.0266-0.0562-0.0203-0.15157-0.0547v0.002c-0.835-0.299-4.1284-1.3772-6.7844-2.0312l-0.44375-0.11094v-1.8453l0.63906 0.0672c1.492 0.153 2.0578-0.0412 2.2688-0.23125 0.245-0.221 0.25781-0.66913 0.25781-1.3781v-6.2109c-1.365 0.968-2.6841 1.3891-4.3531 1.3891-2.648 0-5.2808-1.3289-7.2188-3.6469-1.906-2.279-2.9984-5.3349-2.9984-8.3859 0-10.7 8.1277-11.008 9.0547-11.008 2.264 0 4.1146 0.70413 5.5156 2.0781v-1.6516l0.66875-0.5 7.5219 2.6625v1.7828l-0.625-0.0484c-1.462-0.114-2.0219 0.0993-2.2359 0.29531-0.217 0.201-0.25625 0.552-0.25625 1.175v27.35l-0.80313 0.32187zm26.03-10.423c-4.06 0-7.0078-2.6528-7.0078-6.3078 0-3.707 2.7168-5.5478 5.7438-7.2578l2.6984-1.5344c1.47-0.828 2.1266-1.7638 2.1266-3.0328 0-1.681-1.2405-2.725-3.2375-2.725-3.682 0-4.7885 3.0591-5.3875 6.0531l-0.0937 0.46563h-1.8016v-8.425h1.4l0.17343 0.19531c0.323 0.364 0.32194 0.36406 0.63594 0.36406 0.541 0.018 1.2398-0.14694 2.0438-0.33594 1.01-0.235 2.1562-0.50156 3.3562-0.50156 3.045 0 7.3328 2.0424 7.3328 6.5844 0 3.168-1.8971 4.5876-4.1891 5.9906-0.002 0.002-5.0344 2.9828-5.0344 2.9828-1.154 0.688-1.7172 1.6072-1.7172 2.8062 0 0.982 0.78781 2.4438 2.9578 2.4438 1.611 0 3.5909-0.59762 4.5969-5.2656l0.1-0.46094h1.7672l-0.22187 7.5422h-1.4125l-0.16875-0.29219c-0.076-0.137-0.20181-0.21875-0.33281-0.21875-0.073 0.003-0.47038 0.13081-0.70938 0.20781-0.9 0.288-2.2518 0.72188-3.6188 0.72188zm-17.206-1.1453c-0.094 0.035-0.12762-0.0327-0.0906-0.10469 0.475-0.949 1.194-1.9 2.675-1.9 1.48 0 2.2016 0.951 2.6766 1.9 0.035 0.072 0.001 0.13969-0.0937 0.10469-0.064-0.024-1.0948-0.40469-2.5828-0.40469s-2.5204 0.38069-2.5844 0.40469zm-17.308-1.3219c2.638 0 4.2141-2.2131 4.2141-4.3531v-10.341c-0.32-1.334-1.8165-2.3031-3.5625-2.3031-2.695 0-5.8437 2.3403-5.8437 8.9203 0 5.961 2.7962 8.0766 5.1922 8.0766zm16.027-3.7203c-0.0579-0.008-0.0727-0.0726-0.0359-0.14531 0.722-1.413 1.7766-2.7062 3.9016-2.7062 2.126 0 3.18 1.2932 3.9 2.7062 0.051 0.097 0.007 0.17925-0.10782 0.13125-0.338-0.151-1.8162-0.76875-3.7922-0.76875s-3.4558 0.61775-3.7938 0.76875c-0.0285 0.012-0.0526 0.0166-0.0719 0.0141zm-1.3-5.3766c-0.0699-0.008-0.0877-0.0868-0.0375-0.18282 0.981-1.902 2.3911-3.5625 5.2031-3.5625 2.813 0 4.2221 1.6605 5.2031 3.5625 0.066 0.128 0.0136 0.22407-0.12343 0.16407-0.628-0.288-2.5837-1.1594-5.0797-1.1594-2.495 0-4.4517 0.87138-5.0797 1.1594-0.0343 0.015-0.0626 0.0213-0.0859 0.0187zm-1.4203-5.8656c-0.0825-0.007-0.10363-0.10031-0.0406-0.22031 1.266-2.44 3.0656-4.4969 6.6266-4.4969s5.3606 2.0569 6.6266 4.4969c0.084 0.16 0.0183 0.27187-0.14375 0.19687-0.944-0.436-3.4228-1.5859-6.4828-1.5859-3.061 0-5.5378 1.1499-6.4828 1.5859-0.0402 0.0188-0.0756 0.0259-0.10312 0.0234z"
    fill="#e41932" transform="matrix(1.25 0 0 -1.25 -112.5 617.48)" />
  </svg>
);

class myHeader extends Component{
  render(){
    return (
      <Header>
        <Menu 
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px'}}
        >
          <Menu.Item key="0" ><Icon component={dishSVG}/></Menu.Item>
          <Menu.Item key="1" ><Link to="/">Home</Link></Menu.Item>
          <Menu.Item key="2" ><Link to="/data">Data</Link></Menu.Item>
          <Menu.Item key="3" ><Link to="/about">About</Link></Menu.Item>
          <Menu.Item key="4" style={{float: 'right'}}><Link style={{color: 'yellow'}} to="/user">Username</Link></Menu.Item>
        </Menu>        
      </Header>
    );
  }
}

export default myHeader;