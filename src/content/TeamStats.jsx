import { Row } from "antd";
import React from "react";
import teams from "../constants/teams";
import Team from "../team/Team";

const TeamStats = () => (
  <>
    <Row justify="space-evenly">
      {teams.map((team, i) => (
        <Team team={team} key={i}></Team>
      ))}
    </Row>
  </>
);

export default TeamStats;
