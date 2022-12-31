import { Col, Row } from "antd";
import React from "react";
import { Layout } from "antd";
const { Header: AHeader } = Layout;

const Header = () => (
  <AHeader color="#36d1dc">
    <Row justify="space-between" align="middle">
      <Col span={4} align="start">
        <span style={{ color: "white", fontSize: "24px" }}>Squad Manager</span>
      </Col>
    </Row>
  </AHeader>
);

export default Header;
