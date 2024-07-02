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
  InfoCircleOutlined,
  FileExclamationOutlined,
  MessageFilled,
  BulbOutlined,
  FormOutlined,
  NodeIndexOutlined
} from "@ant-design/icons";
import { Layout, Menu, Avatar, Divider, Card, QRCode, Row, Col } from "antd";

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,

  };
}


export default function Home() {
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
    <main >
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
        <Header className="header" />
        <Content className="content">
          <Row id="div1" gutter={[16, 16]}>
            <Col span={24}>
              <h1>Welcome</h1>
            </Col>
          </Row>
          <Row id="div2" gutter={[16, 16]}>
            <Col xs={24} md={16} flex={"auto"}>
              <Card className="card1">
                <div id="div3">
                  <button id="btn1">You're Eligible</button>
                  <InfoCircleOutlined className="infocircle" />
                </div>
                <Divider />
                <div id="div4">
                  <h2>Apply for Gyan Darshan</h2>
                </div>
                <p>
                  This option is available for individuals who have completed
                  Maha
                  <br /> Aasamani Paramgyan shivir from Tejgyan Foundation.
                </p>
                <div id="div5">
                  <button id="btn2">Get Started</button>
                </div>
                <p id="para1">5+ opportunities this month</p>
              </Card>
            </Col>
            <Col xs={24} md={8} flex={"auto"}>
              <Card className="card2">
                <div id="div6">
                  <Avatar size={85} src="/Logo2.png" id="ava" />
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
          </Row>
          <Row id="div10">
            <Col span={32} flex={"auto"}>
              <h3>History</h3>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={24} flex={"auto"}>
              <Card className="card3">
                <FileExclamationOutlined className="file-exclamation" />
                <p>No applications yet</p>
                <p>Your past Darshan appointments will reflect here</p>
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
