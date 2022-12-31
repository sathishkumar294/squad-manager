import { Segmented } from "antd";
import React from "react";
import teams from "../constants/teams";
import TeamCard from "../team/TeamCard";

const TeamList = () => {
  return (
    <Segmented block
      options={teams.map((team, i) => ({
        label: <TeamCard team={team} key={i}></TeamCard>,
        value: team.name,
      }))}
    ></Segmented>
  );
};

export default TeamList;
