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
  Row,
  Col,
  Steps,
  Button,
  Space,
} from "antd";


const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const currentDate = new Date().toLocaleDateString();

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
                  <h2>View Status</h2>
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
              <Col xs={24} md={24}>
                <h1>
                  Congratulations ! Your Application has been Submitted
                  Successfully
                </h1>
              </Col>
            </Row>
            <Row gutter={[16, 16]} flex={"auto"}>
              <Col xs={24} md={6}>
                <Space direction="vertical" size={41}>
                  <Row gutter={[16, 16]}>
                    <Col xs={24} md={24}>
                      <h3>Application Summary</h3>
                      <p>Lorem</p>
                    </Col>
                  </Row>
                  <Row gutter={[16, 16]}>
                    <Col xs={24} md={24}>
                      <h3>Application Type</h3>
                      <p>Gyan Darshan</p>
                    </Col>
                  </Row>
                  <Row gutter={[16, 16]}>
                    <Col xs={24} md={24}>
                      <h3>Total Applicants</h3>
                      <p>Lorem</p>
                    </Col>
                  </Row>
                  <Divider />
                  <Row gutter={[16, 16]}>
                    <Col xs={24} md={4}>
                      <Avatar size="large" icon={<UserOutlined />} />
                    </Col>
                    <Col style={{ marginLeft: "1rem" }}>
                      <h4>User 1</h4>
                      <p>Lorem Ipsum</p>
                    </Col>
                  </Row>
                  <Row gutter={[16, 16]}>
                    <Col xs={24} md={4}>
                      <Avatar size="large" icon={<UserOutlined />} />
                    </Col>
                    <Col style={{ marginLeft: "1rem" }}>
                      <h4>User 2</h4>
                      <p>Lorem Ipsum</p>
                    </Col>
                  </Row>
                  <Row gutter={[16, 16]}>
                    <Col xs={24} md={4}>
                      <Avatar size="large" icon={<UserOutlined />} />
                    </Col>
                    <Col style={{ marginLeft: "1rem" }}>
                      <h4>User 3</h4>
                      <p>Lorem Ipsum</p>
                    </Col>
                  </Row>
                </Space>
              </Col>
              <Col xs={24} md={16}>
                <h3>Hi, XYZ</h3>
                <p>Here's the status of your Gyan Application Darshan.</p>
                <Divider />
                <Steps
                  direction="vertical"
                  current={1}
                  items={[
                    {
                      title: "Application Received",
                      description: (
                        <Card
                          className="card1"
                          size="small"
                          title="Application Received"
                          style={{
                            width: 300,
                          }}
                          extra={currentDate}
                        >
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                        </Card>
                      ),
                    },
                    {
                      title: "Event Assigned",
                      description: (
                        <Card
                          className="card2"
                          size="small"
                          title="Event Assigned"
                          style={{
                            width: 300,
                          }}
                          extra={currentDate}
                        >
                          <h3>{currentDate}</h3>
                          <p>Title of the Event</p>
                          <Button
                            type="text"
                            icon={<DeleteOutlined />}
                            id="del-btn"
                          />
                          <Space direction="horizontal" size={8}>
                            <Button
                              type="default"
                              style={{
                                border: "solid grey",
                                width: "7rem",
                                borderRadius: "1rem",
                              }}
                            >
                              Reschedule
                            </Button>
                            <Button
                              type="default"
                              style={{
                                border: "solid grey",
                                width: "7rem",
                                borderRadius: "1rem",
                                color: "white",
                                backgroundColor: "green",
                              }}
                            >
                              Confirm
                            </Button>
                          </Space>
                        </Card>
                      ),
                    },
                    {
                      title: "Event Confirmed",
                      description: (
                        <Card
                          className="card3"
                          size="small"
                          title="Event Confirmed"
                          style={{
                            width: 300,
                            color: "grey",
                          }}
                          extra={currentDate}
                        >
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                        </Card>
                      ),
                    },
                  ]}
                />
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
