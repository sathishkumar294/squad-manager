import { Col, List } from "antd";
import React from "react";

const Player: React.FC<{ player: Player }> = ({ player }) => (
  <List.Item>
    <Col span={16}>
      <span style={{ fontWeight: "bold" }}>{player.name}</span>
      <br />
      <span>{player.country}</span>
    </Col>
    <Col span={8}>{player.type}</Col>
  </List.Item>
);

export default Player;
