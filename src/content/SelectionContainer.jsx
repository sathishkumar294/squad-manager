import { Col, Row } from "antd";
import React from "react";
import PlayerList from "./PlayerList";
import TeamList from "./TeamList";

const SelectionContainer = () => {
    return (<Row justify="space-between" align="middle" >
        <Col span={4}><PlayerList></PlayerList></Col>
        <Col span={20}><TeamList></TeamList></Col>
    </Row>)
}

export default SelectionContainer;