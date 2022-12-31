import { Segmented } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { selectTeams } from "../app/store/teams";
import TeamCard from "../team/TeamCard";

const TeamList = () => {
  const teams = useSelector(selectTeams);
  console.log({ teams });
  return (
    <Segmented
      block
      options={teams.map((team, i) => ({
        label: <TeamCard team={team} key={i}></TeamCard>,
        value: team.name,
      }))}
    ></Segmented>
  );
};

export default TeamList;
