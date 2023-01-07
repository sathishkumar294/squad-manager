import { Card } from "antd";
import React from "react";
import TeamCover from "./TeamCover";

const TeamCard: React.FC<{ team: Team; onClick?: () => void }> = ({
  team,
  onClick,
}) => (
  <Card
    title={team.name}
    cover={<TeamCover team={team}></TeamCover>}
    onClick={onClick || (() => {})}
    style={{ minWidth: "200px", ...(!!onClick ? { cursor: "pointer" } : {}) }}
  ></Card>
);

export default TeamCard;
