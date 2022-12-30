import { Col, Row } from "antd";
import React from "react";
import { Layout } from 'antd';
const { Header: AHeader } = Layout;

const Header = () => <AHeader>
    <Row justify="space-between" align="middle" >
        <Col span={4} align="start" >
            <span style={{color: 'white', fontSize: '24px'}}>Squad Manager</span>
        </Col>
        <Col span={6}><span style={{color: 'white'}}>123</span></Col>
    </Row>
</AHeader>

export default Header;