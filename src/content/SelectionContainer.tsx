import { Col, Row } from "antd";
import { PlayerListContainer } from "./PlayerListContainer";
import TeamList from "./TeamList";

const SelectionContainer = () => {
  return (
    <Row justify="space-between" align="top">
      <Col span={10}>
        <PlayerListContainer></PlayerListContainer>
      </Col>
      <Col span={14}>
        <TeamList></TeamList>
      </Col>
    </Row>
  );
};

export default SelectionContainer;
