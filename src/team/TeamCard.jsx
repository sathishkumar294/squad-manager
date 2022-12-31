import { Card } from "antd";
import React from "react";
import TeamCover from "./TeamCover";

const TeamCard = ({ team }) => (
  <Card title={team.name} cover={<TeamCover team={team}></TeamCover>}></Card>
);

export default TeamCard;
