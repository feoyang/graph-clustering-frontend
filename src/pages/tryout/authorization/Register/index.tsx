import { Form, Input, Button, Typography, message, Flex } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { requestRegister } from "../../../../services/requests/user";
import { useOutletContext } from "react-router-dom";
import { LoginContextType } from "../Layout";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { atom, useAtom } from "jotai";
const formItemLayout = {
  wrapperCol: {
    xs: { offset: 1, span: 22 },
    sm: { offset: 2, span: 20 },
    md: { offset: 2, span: 20 },
    lg: { offset: 2, span: 20 },
    xl: { offset: 2, span: 20 },
  },
};

type FieldType = {
  account?: string;
  password?: string;
  repassword?: string;
  verification?: boolean;
};

const { Title, Text } = Typography;
const verifiedAtom = atom<boolean>(false);
const accountPasswordFinishedAtom = atom<boolean>(false);
const Register: React.FC = () => {
  const navigate = useNavigate();
  const { setLoginState } = useOutletContext<LoginContextType>();

  const onFinish = async (registerForm: {
    account: string;
    password: string;
  }) => {
    setAccountPasswordFinished(true);
    if (verified === true) {
      const { account, password } = registerForm;
      const res = await requestRegister({ account, password });
      if (res?.success === true) {
        setLoginState({
          account: registerForm.account,
          password: registerForm.password,
        });
        message.success(res?.message);
        navigate("/user/login");
      } else {
        message.error(res?.message);
      }
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const [verified, setVerified] = useAtom(verifiedAtom);
  const [accountPasswordFinished, setAccountPasswordFinished] = useAtom(
    accountPasswordFinishedAtom
  );
  const onChange = (value) => {
    setVerified(true);
  };

  return (
    <>
      <Title className="title" level={2}>
        Create your account
      </Title>
      <Form
        name="basic"
        initialValues={{ remember: true }}
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
          style={{ marginBottom: "1rem" }}
        >
          <Input.Password
            size="large"
            placeholder="password"
            prefix={<LockOutlined />}
          />
        </Form.Item>
        <Form.Item<FieldType>
          name="repassword"
          dependencies={["password"]}
          validateTrigger="onBlur"
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Password do not match!"));
              },
            }),
          ]}
          style={{ marginBottom: "1.7rem" }}
        >
          <Input.Password
            size="large"
            placeholder="password again"
            prefix={<LockOutlined />}
          />
        </Form.Item>
        {accountPasswordFinished === true && (
          <Form.Item<FieldType>
            name="verification"
            rules={[
              {
                required: true,
                message: "Please confirm!",
              },
            ]}
          >
            <ReCAPTCHA
              sitekey="6LcUu08pAAAAAHJlxIcfglQIctmsSHF-LOKC0ZGB"
              onChange={onChange}
            />
          </Form.Item>
        )}

        <Form.Item<FieldType> style={{ marginBottom: "1rem" }}>
          <Button className="authorization-button" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Flex className="bottom-link" justify="center" align="center">
        <span>已有帐号，</span>
        <Link to={"../login"}>直接登录</Link>
        <Text className="back">
          ➩&nbsp;
          <Link to={"../../graph/upload"}>back</Link>
        </Text>
      </Flex>
    </>
  );
};

export default Register;
