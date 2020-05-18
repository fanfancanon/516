import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
import './style.css'
import { NavLink } from 'react-router-dom';

const { SubMenu } = Menu;

export default class index extends Component {
  render() {
    return (
          <Menu
          onClick={this.handleClick}
          style={{ width: 256 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
        >
          <SubMenu
            key="sub1"
            title={
              <span>
              <Icon type="appstore" />
                <span>Navigation One</span>
              </span>
            }
          >
              <Menu.Item key="1">
                  <NavLink to='/home/tab'>
                         Dashboard(2 new updates)
                  </NavLink>
              </Menu.Item>
              
              <Menu.Item key="2">
                  <NavLink to='/home/tab'>
                          Basic UI Elements
                  </NavLink>
              </Menu.Item>
              <Menu.Item key="3">
                  <NavLink to='/home/tab'>
                          lcons
                  </NavLink>
              </Menu.Item>
              <Menu.Item key="4">
                  <NavLink to='/home/tab1'>
                          Form Elements
                  </NavLink>
              </Menu.Item>
              <Menu.Item key="5">
                  <NavLink to='/home/tab2'>
                          Chart
                  </NavLink>
              </Menu.Item>
              <Menu.Item key="6">
                  <NavLink to='/home/tab3'>
                          Table
                  </NavLink>
              </Menu.Item>
              <Menu.Item key="7">
                  <NavLink to='/home/tab'>
                          Sample Pages
                  </NavLink>
             </Menu.Item>
            
          </SubMenu>
        
        
        </Menu>
    )
  }
}

