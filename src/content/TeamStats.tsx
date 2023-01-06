import { Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { selectTeams } from "../app/store/teams";
import Team from "../team/Team";

const TeamStats = () => {
  const teams = useSelector(selectTeams);
  console.log({ teams });
  return (
    <>
      <Row justify="space-evenly">
        {teams.map((team, i) => (
          <Team team={team} key={team.name}></Team>
        ))}
      </Row>
    </>
  );
};

export default TeamStats;
