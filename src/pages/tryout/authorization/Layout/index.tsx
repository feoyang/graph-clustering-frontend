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

const { Text } = Typography;
const loginAtom = atom<LoginState>({ account: undefined, password: undefined });

const User: React.FC = () => {
  const [loginState, setLoginState] = useAtom(loginAtom);
  return (
    <>
      <Flex className="user" justify="center" align="center">
        <Row justify="center" align="middle">
          <Col xs={22} sm={18} md={15} lg={12} xl={8}>
            <Card className="authorization-container">
              <Flex vertical={true} justify="center" align="center">
                <Outlet context={{ loginState, setLoginState }} />
              </Flex>
            </Card>
          </Col>
        </Row>
      </Flex>
    </>
  );
};

export default User;
