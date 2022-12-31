import { Card, Col } from "antd";
import React from "react";
import countries from "../constants/countries";
import playerTypes from "../constants/playerTypes";

const Team = ({ team }) => {
  return (
    <Card
      title={team.title}
      cover={
        <div style={{ padding: "32px" }}>
          <img alt={team.name} src={team.logo} height="150px" />
        </div>
      }
      bordered={false}
      style={{ width: 300 }}
    >
      <Col span={6}>
        {countries.map((c, i) => (
          <p key={i}>
            {c}
            <span>{team.players.filter((p) => p.country === c).length}</span>
          </p>
        ))}
      </Col>
      <Col span={6}>
        {playerTypes.map((t, i) => (
          <p key={i}>
            {t} <span>{team.players.filter((p) => p.type === t).length}</span>
          </p>
        ))}
      </Col>
    </Card>
  );
};

export default Team;
