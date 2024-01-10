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
  Space,
} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./index.scss";

const onFinish = (values: string) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: ValidateErrorEntity<string>) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const { Title } = Typography;

const Register: React.FC = () => {
  return (
    <>
      <Flex className="authorization" justify="center" align="center">
        <Row justify="center" align="middle" style={{ width: "100%" }}>
          <Col xs={20} sm={16} md={12} lg={10} xl={8}>
            <Card className="authorization-container">
              <Flex vertical={true} justify="center" align="center">
                <Title
                  level={2}
                  style={{ marginTop: "15px", marginBottom: "30px" }}
                >
                  Register you account
                </Title>
                <Form
                  name="basic"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                  style={{ width: "80%" }}
                >
                  <Form.Item<FieldType>
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="username"
                      prefix={<UserOutlined />}
                    />
                  </Form.Item>

                  <Form.Item<FieldType>
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                    style={{ marginBottom: "10px" }}
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
                    style={{ marginBottom: "20px" }}
                  >
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>

                  <Form.Item<FieldType> style={{ marginBottom: "15px" }}>
                    <Button className="authorization-button" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </Flex>
            </Card>
          </Col>
        </Row>
      </Flex>
    </>
  );
};

export default Register;
