import {
  Form,
  Col,
  Row,
  Flex,
  Typography,
  Space,
  Upload as _Upload,
} from "antd";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Title, Paragraph, Text } = Typography;
const normFile = (e: any) => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const Upload: React.FC = () => {
  return (
    <>
      <Flex className="upload" justify="center" align="center">
        <Row justify="center">
          <Col xs={20} sm={18} md={15} lg={12} xl={15}>
            <Flex className="content" vertical justify="center" align="center">
              <Title className="title">Graph Clustering</Title>
              <Form className="upload-dragger">
                <Form.Item
                  name="dragger"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                  noStyle
                >
                  <_Upload.Dragger name="files" action="/upload.do">
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">upload a file to start</p>
                    <p className="ant-upload-hint">try with .csv .execl</p>
                  </_Upload.Dragger>
                </Form.Item>
              </Form>

              <Space className="features" direction="vertical">
                <Text>😍 提供丰富的操作与功能，让你获得梦想中的图模型</Text>
                <Text>☁️ 云端保存登录之后创作的模型</Text>
                <Text>👏 简洁且富有美感的界面</Text>
                <Text>
                  ➩&nbsp;&nbsp;
                  <Link className="login" to={"../../user/login"}>
                    登录
                  </Link>
                  &nbsp;or&nbsp;
                  <Link className="register" to={"../../user/register"}>
                    注册
                  </Link>
                </Text>
              </Space>
            </Flex>
          </Col>
        </Row>
      </Flex>
    </>
  );
};

export default Upload;
