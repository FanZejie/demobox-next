'use client'
import React, { useState, ReactNode } from 'react';
import { useRouter, usePathname } from "next/navigation";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  MobileOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import type { MenuProps } from 'antd';
const { Header, Sider, Content } = Layout;

interface MyComponentProps {
  children: ReactNode;
}



const MySidebar = ({ children }: MyComponentProps) => {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState('/dashboard/appTopo');
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  

  const menuItemClick: MenuProps['onClick'] = (e) => {

    setCurrent(e.key);
    router.push(e.key)
  };

  const menuItem = [
    {
      key: '/dashboard/healthCheck',
      icon: <UserOutlined />,
      label: 'Health Check',
    },
    {
      key: '/dashboard/appTopo',
      icon: <VideoCameraOutlined />,
      label: 'App Topo',
    },
    {
      key: '/dashboard/mobile',
      icon: <MobileOutlined />,  // 需要先导入这个图标
      label: 'Mobile Demo',
    },
  ]

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