import { Card, Progress } from "antd";
import React from "react";
import { MAX_PLAYERS_PER_TEAM } from "../constants/config";
import TeamCover from "./TeamCover";

const TeamCard: React.FC<{ team: Team; onClick?: () => void }> = ({
  team,
  onClick,
}) => (
  <Card
    title={team.name}
    cover={<TeamCover team={team}></TeamCover>}
    onClick={onClick || (() => {})}
    hoverable={true}
    style={{ minWidth: "200px", ...(!!onClick ? { cursor: "pointer" } : {}) }}
  >
    <Progress
      percent={Math.ceil((100 * team.players.length) / MAX_PLAYERS_PER_TEAM)}
      steps={MAX_PLAYERS_PER_TEAM}
      size="default"
      strokeColor={"#8E44AD"}
    ></Progress>
  </Card>
);

export default TeamCard;
