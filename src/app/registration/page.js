"use client";
import "./Styles.css";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  BookOutlined,
  HomeOutlined,
  BellOutlined,
  LogoutOutlined,
  UserOutlined,
  MessageFilled,
  ArrowLeftOutlined,
  DeleteOutlined,
  PlusOutlined,
  BulbOutlined,
  NodeIndexOutlined,
  FormOutlined
} from "@ant-design/icons";
import {
  Layout,
  Menu,
  Avatar,
  Divider,
  Card,
  QRCode,
  Row,
  Col,
  Steps,
  Button,
  Form,
  Input,
  Cascader,
} from "antd";
import TextArea from "antd/es/input/TextArea";

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

function Home() {
  const [collapsed, setCollapsed] = useState(true);
  const router = useRouter();
  const items = [
    getItem("Home", "1", <HomeOutlined onClick={()=>{
      router.push("/")
    }} />),
    getItem("About us", "2", <BulbOutlined onClick={()=>{
      router.push("/about")
    }}  />),
    getItem("Registration", "3", <FormOutlined onClick={()=>{
      router.push("/registration")
    }} />),
    getItem("Status", "4", <NodeIndexOutlined onClick={()=>{
      router.push("/status")
    }} />),
    getItem("Saved", "5", <BookOutlined />),
    getItem("Notification", "sub1", <BellOutlined />),
    getItem("Logout", "sub2", <LogoutOutlined />),
  ];

  return (
    <main>
      <Layout className="layoutt1">
        <Sider
          theme="light"
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          style={{ background: "#FBFBFF" }}
          breakpoint="xl"
          collapsedWidth="0"
          className="sider"
        >
          <div className="demo-logo-vertical">
            <img src="/Logo.png" alt="Logo" id="img1" />
          </div>
          <Menu
            mode="inline"
            items={items}
            style={{ border: "none" }}
            className="menu1"
          />
          <Menu
            items={[
              getItem(
                "",
                "5",
                <Avatar size="large" src="/Logo2.png" icon={<UserOutlined />} />
              ),
            ]}
            style={{ border: "none" }}
            className="menu2"
          />
        </Sider>
        <Layout className="layout2">
          <Header className="header">
            <Row gutter={[16, 16]} flex={"auto"} align="middle">
              <Col span={4}>
                <div className="btn-back">
                  <Button type="back">
                    <ArrowLeftOutlined />
                  </Button>
                </div>
              </Col>
              <Col span={20}>
                <div className="div-header-heading">
                  <h1>Apply For Gyan Darshan</h1>
                  <h2>Complete and Apply</h2>
                </div>
              </Col>
              <Col className="steps-col">
                <Steps
                  size="small"
                  current={1}
                  className="steps"
                  items={[
                    {
                      title: "Finished",
                    },
                    {
                      title: "In Progress",
                    },
                    {
                      title: "Waiting",
                    },
                  ]}
                />
              </Col>
            </Row>
          </Header>
          <Divider />
          <Content className="content">
            <Row gutter={[16, 16]} flex={"auto"} id="heading-id">
              <Col xs={24} md={12}>
                <h1>Add Personal Details</h1>
                <p id="summary-para">
                  We are gathering information to update our records and ensure
                  accuracy.
                </p>
              </Col>
            </Row>
            <Row id="div1" gutter={[16, 16]}>
              <Col xs={24} md={14} flex={"auto"}>
                <Form
                  name="trigger"
                  style={{
                    maxWidth: "20rem",
                  }}
                  layout="vertical"
                  autoComplete="off"
                >
                  <Row gutter={[16, 16]}>
                    <Col xs={24} md={12}>
                      <Form.Item
                        hasFeedback
                        label="First Name"
                        name="first_name"
                        validateTrigger={1000}
                        rules={[
                          {
                            max: 10,
                          },
                        ]}
                      >
                        <Input placeholder="First Name"style={{ border:"solid grey",borderRadius:"1rem"}} />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item
                        hasFeedback
                        label="Last Name"
                        name="last_name"
                        validateDebounce={1000}
                        rules={[
                          {
                            max: 10,
                          },
                        ]}
                      >
                        <Input placeholder="Last Name" style={{ border:"solid grey",borderRadius:"1rem"}}/>
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row gutter={[16, 16]}>
                    <Col xs={24} md={12}>
                      <Form.Item
                        hasFeedback
                        label="Email Id"
                        name="email_id"
                        validateFirst={1000}
                        rules={[
                          {
                            max: 30,
                          },
                        ]}
                      >
                        <Input placeholder="Email Id" style={{ border:"solid grey",borderRadius:"1rem"}}/>
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item
                        hasFeedback
                        label="Mobile No."
                        name="mobile_number"
                        validateFirst={1000}
                        rules={[
                          {
                            max: 10,
                          },
                        ]}
                      >
                        <Input placeholder="Mobile Number"style={{ border:"solid grey",borderRadius:"1rem"}} />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row gutter={[16, 16]}>
                    <Col xs={24} md={24}>
                      <Form.Item
                        label="Choose the Purpose of Darshan"
                        name="purpose_of_darshan"
                      >
                        <Cascader style={{ border:"solid grey",borderRadius:"0.5rem", color:"grey"}}/>
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={24}>
                      <Form.Item
                        hasFeedback
                        label="Additional Information"
                        name="additional_info"
                        validateFirst={1000}
                        rules={[
                          {
                            max: 50,
                          },
                        ]}
                      >
                        <TextArea placeholder="Additional Information" style={{ border:"solid grey",borderRadius:"1rem"}} />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row gutter={[16, 16]}>
                    <Col xs={24} md={8}>
                      <Form.Item>
                        <Button type="default" size="large" style={{ width:"13rem", background:"grey", color:"white",borderRadius:"1rem"}}>
                          Next
                        </Button>
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </Col>
              <Col xs={24} md={7} flex={"auto"}>
                <Card className="card2">
                  <div id="div6">
                    <Button
                      type="text"
                      icon={<DeleteOutlined />}
                      id="del-btn"
                    />
                    <Avatar size={85} src={`/Logo2.png`} id="ava" />
                  </div>
                  <div id="div7">
                    <h3>Lorem Ipsum Lorem</h3>
                    <div id="div8">
                      <p id="para2">
                        Khoji ID:
                        <br /> (xxxxxxxxxx)
                      </p>
                      <QRCode
                        type="canvas"
                        value="https://ant.design/"
                        size={95}
                      />
                    </div>
                    <div id="div9">
                      <p>
                        Tejasthan
                        <br /> Lorem Ipsum
                      </p>
                      <p>
                        Shivir Level
                        <br /> Lorem Ipsum
                      </p>
                      <p>
                        DOB
                        <br /> Lorem Ipsum
                      </p>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col xs={24} md={8}>
                <Card className="card3">
                  <PlusOutlined id="plus" />
                  <div>Lorem Ipsum Lorem</div>
                </Card>
              </Col>
            </Row>
          </Content>
          <Footer className="footer">
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
        <MessageFilled className="msg" />
      </Layout>
    </main>
  );
}
export default Home;
