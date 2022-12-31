import { Card, Col, Row } from "antd";
import React from "react";
import countries from "../constants/countries";
import playerTypes from "../constants/playerTypes";
import Slots from "../shared/Slots";
import TeamCover from "./TeamCover";

const Team = ({ team }) => {
  return (
    <Card
      title={team.name}
      cover={<TeamCover team={team} width="128px"></TeamCover>}
      bordered={false}
      style={{ width: 300, margin: "8px 32px" }}
    >
      <Row justify="space-between">
        <Col span={10}>
          {countries.map((c, i) => (
            <Row key={i} justify="space-between">
              <Col span={12}>{c.name}</Col>
              <Col span={12} style={{ justifyContent: "end" }}>
                <Slots
                  max={c.maxAllowed}
                  value={team.players.filter((p) => p.country === c.name).length}
                ></Slots>
              </Col>
            </Row>
          ))}
        </Col>
        <Col span={10}>
          {playerTypes.map((type, i) => (
            <Row key={i} justify="space-between">
              <Col span={12}>{type.type}</Col>
              <Col span={12}>
                <Slots
                  max={type.maxAllowed}
                  value={team.players.filter((p) => p.type === type.type).length}
                ></Slots>
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </Card>
  );
};

export default Team;
