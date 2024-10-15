'use client'
import React, { useState, ReactNode } from 'react';
import { useRouter } from "next/navigation";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import type { MenuProps } from 'antd';
const { Header, Sider, Content } = Layout;

interface MyComponentProps {
  children: ReactNode;
}

const menuItem = [
  {
    key: 'healthCheck',
    icon: <UserOutlined />,
    label: 'Health Check',
  },
  {
    key: 'appTopo',
    icon: <VideoCameraOutlined />,
    label: 'App Topo',
  },
]

const MySidebar = ({ children }: MyComponentProps) => {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState('appTopo');
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const menuItemClick: MenuProps['onClick'] = (e) => {

    setCurrent(e.key);
    router.push(e.key)
  };

  return (
    <Layout className='h-screen'>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        {collapsed ? <div className=' text-white text-center py-4'>Demo Box</div> : <div className=' text-white text-2xl text-center py-4'>Demo Box</div>}

        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[current]}
          onClick={menuItemClick}
          items={menuItem}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />


        </Header>
        <Content
          style={{
            margin: '5px 5px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MySidebar;