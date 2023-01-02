import { Card } from "antd";
import React from "react";
import TeamCover from "./TeamCover";

const TeamCard = ({ team, onClick }) => (
  <Card
    title={team.name}
    cover={<TeamCover team={team}></TeamCover>}
    onClick={onClick || (() => {})}
    style={!!onClick ? { cursor: "pointer" } : {}}
  ></Card>
);

export default TeamCard;
