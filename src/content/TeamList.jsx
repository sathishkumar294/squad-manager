import { Segmented } from "antd";
import React from "react";
import teams from "../constants/teams";
import TeamCover from "../team/TeamCover";

const TeamList = () => {
  return (
    <Segmented block
      options={teams.map((team, i) => ({
        label: <TeamCover team={team} key={i}></TeamCover>,
        value: team.name,
      }))}
    ></Segmented>
  );
};

export default TeamList;
