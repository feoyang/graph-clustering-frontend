import { Form, Input, Checkbox, Button, Typography, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { requestLogin } from "../../../services/requests/user";
import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { LoginContextType } from "../Layout";
import { getToken, setToken } from "../../../authorization/token";

type FieldType = {
  account?: string;
  password?: string;
  remember?: string;
};

const { Title } = Typography;

const formItemLayout = {
  wrapperCol: {
    xs: { offset: 1, span: 22 },
    sm: { offset: 2, span: 20 },
    md: { offset: 2, span: 20 },
    lg: { offset: 2, span: 20 },
    xl: { offset: 2, span: 20 },
  },
};

const Login: React.FC = () => {
  const navigate = useNavigate();
  const onFinish = async (loginForm: {
    account: string;
    password: string;
    remember: boolean;
  }) => {
    const res = await requestLogin(loginForm);
    setToken(res.token);
    navigate("/home");
    message.success("登陆成功！");
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const { loginState } = useOutletContext<LoginContextType>();
  console.log("loginState.account: " + loginState.account);
  console.log("loginState.password: " + loginState.password);

  return (
    <>
      <Title level={2}>Welcome back</Title>
      <Form
        name="basic"
        initialValues={{
          account: loginState.account || "",
          password: loginState.password || "",
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        {...formItemLayout}
        style={{ width: "100%" }}
      >
        <Form.Item<FieldType>
          name="account"
          validateTrigger="onBlur"
          rules={[
            {
              required: true,
              message: "Please input your account!",
            },
            {
              type: "string",
              min: 2,
            },
            {
              type: "string",
              max: 16,
            },
          ]}
          style={{ marginBottom: "1rem" }}
        >
          <Input size="large" placeholder="account" prefix={<UserOutlined />} />
        </Form.Item>

        <Form.Item<FieldType>
          name="password"
          validateTrigger="onBlur"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
            {
              type: "string",
              min: 6,
            },
            {
              type: "string",
              max: 16,
            },
          ]}
          style={{ marginBottom: "0.5rem" }}
        >
          <Input.Password
            size="large"
            placeholder="password"
            prefix={<LockOutlined />}
          />
        </Form.Item>

        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          style={{ marginBottom: "1.2rem" }}
        >
          <Checkbox>记住密码</Checkbox>
        </Form.Item>

        <Form.Item<FieldType> style={{ marginBottom: "1rem" }}>
          <Button className="authorization-button" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Login;
