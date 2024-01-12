import { Button, Col, Row, Flex, Typography, Space } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Title, Paragraph, Text } = Typography;

const Upload: React.FC = () => {
  return (
    <>
      <Flex className="upload" justify="center" align="center">
        <Row justify="center">
          <Col xs={20} sm={18} md={15} lg={12} xl={15}>
            <Flex className="content" vertical justify="center" align="center">
              <Title className="title">Graph Clustering</Title>
              <Button
                className="upload-button"
                type="primary"
                icon={<UploadOutlined />}
                size={"large"}
              >
                try with .csv
              </Button>
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
