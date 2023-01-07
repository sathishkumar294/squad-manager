import { Button, Card, Col, Row } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { removeAllPlayers } from "../app/store/teams";
import countries from "../constants/countries";
import playerTypes from "../constants/playerTypes";
import Slots from "../shared/Slots";
import TeamCover from "./TeamCover";

const Team: React.FC<{ team: Team }> = ({ team }) => {
  const dispatch = useDispatch();

  return (
    <Card
      title={team.name}
      cover={<TeamCover team={team} width="128px"></TeamCover>}
      bordered={false}
      style={{ minWidth: 400 }}
      actions={[
        <Button onClick={() => dispatch(removeAllPlayers({ team: team.name }))}>
          Delete all
        </Button>,
      ]}
    >
      <Row justify="space-between">
        <Col span={11}>
          {countries.map((c, i) => (
            <Row key={i} justify="space-between">
              <Col span={6}>{c.name}</Col>
              <Col span={16}>
                <Slots
                  max={c.maxAllowed}
                  min={c.minRequired}
                  value={
                    team.players.filter((p) => p.country === c.name).length
                  }
                ></Slots>
              </Col>
            </Row>
          ))}
        </Col>
        <Col span={11}>
          {playerTypes.map((type, i) => (
            <Row key={i} justify="space-between">
              <Col span={8}>{type.type}</Col>
              <Col span={16}>
                <Slots
                  max={type.maxAllowed}
                  min={type.minRequired}
                  value={
                    team.players.filter((p) => p.type === type.type).length
                  }
                  size="small"
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
