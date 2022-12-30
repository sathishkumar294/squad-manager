import { Col, List } from "antd";
import React from "react";

const Player = ({ player }) => (
    <List.Item>
        <Col justify="start">
            <span style={{ fontWeight: 'bold' }}>{player.name}</span>
            <br />
            <span>{player.country}</span>
        </Col>
        <Col>
            <Col span={6}>{player.type}</Col>
        </Col>
    </List.Item>);


export default Player;