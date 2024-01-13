import React, { useEffect, useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Button, Layout, Menu, message, theme } from "antd";
import { requestUserProfile } from "../../../services/requests/user";
import { useUser, useSetUser } from "../../../models/user/hooks";
import { User } from "../../../data/entities";
import { setToken, clearToken } from "../../../authorization/token";
import { useNavigate } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("user", "9", <FileOutlined />),
];

const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();
  const setUser = useSetUser(); // 调用 useSetUser
  const user = useUser(); // 调用 useSetUser

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await requestUserProfile();
        setUser(res as User);
      } catch (err) {
        message.error(err as string);
      }
    };
    fetchUserProfile();
  }, []);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <button
        onClick={() => {
          setUser(undefined);
          clearToken();
          navigate("/user/login");
        }}
      ></button>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width="14rem"
        theme="light" // 设置主题为 "light"
      >
        <div className="demo-logo-vertical" />
        <Menu defaultSelectedKeys={["1"]} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content style={{ margin: "1rem" }}>
          <div
            style={{
              padding: 24,
              height: "100%",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            picture inside
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
