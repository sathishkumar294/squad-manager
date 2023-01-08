import { Col, Row } from "antd";
import { PlayerListContainer } from "./PlayerListContainer";
import TeamList from "./TeamList";

const SelectionContainer = () => {
  return (
    <Row justify="space-between" align="top">
      <Col xs={24} sm={24} md={12} lg={8} xl={6}>
        <PlayerListContainer></PlayerListContainer>
      </Col>
      <Col xs={24} sm={24} md={12} lg={16} xl={17}>
        <TeamList></TeamList>
      </Col>
    </Row>
  );
};

export default SelectionContainer;
