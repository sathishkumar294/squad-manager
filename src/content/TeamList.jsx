import { Col, Row } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPlayerAsync, selectTeams } from "../app/store/teams";
import TeamCard from "../team/TeamCard";

const TeamList = () => {
  const teams = useSelector(selectTeams);
  const dispatch = useDispatch();
  const onTeamSelect = (team) => {
    dispatch(
      addPlayerAsync(
        { name: "Virat Kohli", type: "Batsman", country: "IND" },
        team
      )
    );
  };
  return (
    <Row justify="space-between">
      {teams.map((team, i) => (
        <Col span={3} key={i}>
          <TeamCard
            team={team}
            onClick={() => onTeamSelect(team.name)}
          ></TeamCard>
        </Col>
      ))}
    </Row>
  );
};

export default TeamList;
