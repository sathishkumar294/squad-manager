import { Segmented } from "antd";
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
    <Segmented
      block
      options={teams.map((team, i) => ({
        label: <TeamCard team={team} key={i}></TeamCard>,
        value: team.name,
      }))}
      onChange={onTeamSelect}
    ></Segmented>
  );
};

export default TeamList;
