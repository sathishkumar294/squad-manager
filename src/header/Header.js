import { Col, Row } from "antd";
import React from "react";

const Header = () => <Header>
    <Row justify="space-between">
        <Col span={4}>
            <h2>Squad Manager</h2>
        </Col>
        <Col span={6}></Col>
    </Row>
</Header>

export default Header;