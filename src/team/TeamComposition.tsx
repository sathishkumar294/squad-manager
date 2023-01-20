import { Col, Row } from "antd";
import countries from "../constants/countries";
import playerTypes from "../constants/playerTypes";
import Slots from "../shared/Slots";

function TeamComposition(props: { team: Team }) {
  return (
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
                  props.team.players.filter((p) => p.country === c.name).length
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
                  props.team.players.filter((p) => p.type === type.type).length
                }
                size="small"
              ></Slots>
            </Col>
          </Row>
        ))}
      </Col>
    </Row>
  );
}

export default TeamComposition;
