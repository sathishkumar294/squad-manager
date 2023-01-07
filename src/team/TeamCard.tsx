import { Card, Progress, Space } from "antd";
import React from "react";
import { MAX_PLAYERS_PER_TEAM } from "../constants/config";
import TeamCover from "./TeamCover";

const TeamCard: React.FC<{ team: Team; onClick?: () => void }> = ({
  team,
  onClick,
}) => {
  let strokeColor = "#8E44AD";
  switch (Math.sign(team.players.length - MAX_PLAYERS_PER_TEAM)) {
    case 0:
      strokeColor = "#28B463";
      break;
    case 1:
      strokeColor = "#E74C3C";
      break;
  }
  return (
    <Card
      title={team.name}
      cover={<TeamCover team={team}></TeamCover>}
      onClick={onClick || (() => {})}
      hoverable={true}
      style={{
        minWidth: "200px",
        ...(!!onClick ? { cursor: "pointer" } : {}),
      }}
    >
      <Space direction="vertical">
        <Progress
          percent={Math.ceil(
            (100 * team.players.length) / MAX_PLAYERS_PER_TEAM
          )}
          steps={MAX_PLAYERS_PER_TEAM}
          size="default"
          strokeColor={strokeColor}
        ></Progress>
        <span>
          {team.players.length}/{MAX_PLAYERS_PER_TEAM}
        </span>
      </Space>
    </Card>
  );
};

export default TeamCard;
