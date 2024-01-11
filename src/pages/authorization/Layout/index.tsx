import {
  Form,
  Input,
  Checkbox,
  Card,
  Button,
  Col,
  Row,
  Flex,
  Typography,
} from "antd";
import Login from "../Login";
import Register from "../Register";
import "./index.scss";
import { atom, useAtom } from "jotai";
import { Outlet, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

interface LoginState {
  account: string | undefined;
  password: string | undefined;
}

export interface LoginContextType {
  loginState: LoginState;
  setLoginState: (state: LoginState) => void;
}

const loginAtom = atom<LoginState>({ account: undefined, password: undefined });

const Layout: React.FC = () => {
  const location = useLocation();
  const [loginState, setLoginState] = useAtom(loginAtom);
  return (
    <>
      <Flex className="authorization" justify="center" align="center">
        <Row justify="center" align="middle" style={{ width: "100%" }}>
          <Col xs={22} sm={18} md={15} lg={12} xl={8}>
            <Card className="authorization-container">
              <Flex vertical={true} justify="center" align="center">
                <Outlet context={{ loginState, setLoginState }} />
                <Flex justify="center" align="center">
                  {location.pathname === "/login" && (
                    <>
                      <Link to="#">找回密码</Link>
                      <span style={{ margin: "0 0.34rem" }}>|</span>
                      <Link to="/register">快速注册</Link>
                    </>
                  )}
                  {location.pathname === "/register" && (
                    <>
                      <span>已有帐号，</span>
                      <Link to="/login">直接登录</Link>
                    </>
                  )}
                </Flex>
              </Flex>
            </Card>
          </Col>
        </Row>
      </Flex>
    </>
  );
};

export default Layout;
