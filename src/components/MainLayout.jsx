import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Flex, Icon, Image } from '@chakra-ui/react';
import { IoNotificationsOutline } from 'react-icons/io5';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { BiUser, BiMessageSquareAdd } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import { RiProductHuntLine } from 'react-icons/ri';
import { AiOutlineHome } from 'react-icons/ai';
import { CgToday } from 'react-icons/cg';
import { MdPayments, MdSubscriptions } from 'react-icons/md';
import { BsShopWindow, BsCartPlus, BsMotherboard, BsListTask } from 'react-icons/bs';
const { Header, Sider, Content } = Layout;


const MainLayout = () => {
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ position: "relative" }}>
      <Sider trigger={null} collapsible
        breakpoint="sm"
        onBreakpoint={() => {
          console.log("ok")
          if (!collapsed) {
            setCollapsed(true);
          }
        }}
        collapsed={collapsed} >
        <div className="logo">
          <h2>Comapany Logo</h2>
          {/* add logo and name here */}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['']}
          onClick={({ key }) => {
            if (key === "singout") {

            }
            else {
              // console.log('key: ', key);
              navigate(key)
            }

          }}
          items={[
            {
              key: '',
              icon: <AiOutlineHome />,
              label: 'Dashboard',
            },
            {
              key: 'allusers',
              icon: <FiUsers />,
              label: 'Users',
            },
            {
              key: 'product',
              icon: <RiProductHuntLine />,
              label: 'Products',
              children: [
                {
                  key: 'allproducts',
                  icon: <BsListTask />,
                  label: 'All Products'
                },
                {
                  key: 'addproducts',
                  icon: <BiMessageSquareAdd />,
                  label: 'Add Products'
                },
              ]
            },
            {
              key: 'vendors',
              icon: <BsShopWindow />,
              label: 'Vendors',
              children: [
                {
                  key: 'allvendors',
                  icon: <BsListTask />,
                  label: 'All Vendors'
                },
                {
                  key: 'addvendors',
                  icon: <BiMessageSquareAdd />,
                  label: 'Add Vendors'
                },
              ]
            },
            {
              key: 'order',
              icon: <BsCartPlus />,
              label: 'Orders',
              children: [
                {
                  key: 'allorders',
                  icon: <BsListTask />,
                  label: 'All Orders',
                },
                {
                  key: 'todaysorders',
                  icon: <CgToday />,
                  label: 'Todays Orders',
                }
              ]
            },
            {
              key: 'subscription',
              icon: <MdSubscriptions />,
              label: 'Subscriptions',
            },
            {
              key: 'payment',
              icon: <MdPayments />,
              label: 'Payments',
            },
            {
              key: 'other',
              icon: <BsMotherboard />,
              label: 'Other',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
          <Flex gap="10px" mr={3}>
            <Icon
              _hover={{
                bg: 'blue.500',
                borderRadius: "full",
                color: "white",
                cursor: "pointer",
              }}
              as={IoNotificationsOutline} boxSize={6} color="black" />
            <Icon
              _hover={{
                bg: 'blue.500',
                borderRadius: "full",
                color: "white",
                cursor: "pointer",

              }}
              as={RiLogoutCircleLine} boxSize={6} />
            <Image
              _hover={{
                bg: 'blue.500',
                borderRadius: "full",
                color: "white",
                cursor: "pointer",

              }}
              as={BiUser} boxSize={6} />
          </Flex>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,

          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout
