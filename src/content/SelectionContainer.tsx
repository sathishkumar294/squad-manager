import { Col, Row } from "antd";
import React from "react";
import PlayerList from "./PlayerList";
import TeamList from "./TeamList";

const SelectionContainer = () => {
  return (
    <Row justify="space-between" align="top">
      <Col span={10} style={{ maxHeight: "720px", overflow: "scroll" }}>
        <PlayerList></PlayerList>
      </Col>
      <Col span={14}>
        <TeamList></TeamList>
      </Col>
    </Row>
  );
};

export default SelectionContainer;
