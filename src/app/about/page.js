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
  QRCode,
  Row,
  Col,
  Steps,
  Button,
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

function Index() {
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
            <Col xs={24} md={6}>
              <h1>Summary</h1>
              <p id="summary-para">
                Summary of the Gyan Darshan Based on the information you have
                gathered.
              </p>
            </Col>
          </Row>
          <Row id="members">
            <Col>
              <h3>Added Members</h3>
            </Col>
          </Row>
          <Row id="div1" gutter={[16, 16]}>
            {Array.from({ length: 4 }).map((_, index) => (
              <Col key={index} xs={24} md={4} flex={"auto"}>
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
            ))}
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <h3>Preffered Date</h3>
            </Col>
            <Col span={8}>
              <h3>Purpose of Darshan</h3>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={8} id="date-des">
              <p>
                4th jan 2024 <br /> @Manan Ashram
              </p>
            </Col>
            <Col span={2.5} id="btn1">
              <Button type="back" size="large">
                Nimit Divas
              </Button>
            </Col>
            <Col span={2.5} id="btn2">
              <Button type="back" size="large">
                Relocation
              </Button>
            </Col>
            <Col span={2.5} id="btn3">
              <Button type="back" size="large">
                Health Issue
              </Button>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col id="note-heading">
              <h3>Note Added</h3>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col id="note-description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br /> Ut enim ad minim veniam,quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={4} id="btn4">
              <Button type="back" size="large">
                Edit
              </Button>
            </Col>
            <Col span={8} id="btn5">
              <Button type="back" size="large" style={{ color: "white" }}>
                Save and Apply
              </Button>
            </Col>
          </Row>
        </Content>
        <Footer className="footer">
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
      <MessageFilled className="msg" />
    </Layout>
  );
}

export default Index;
