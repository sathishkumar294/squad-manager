import { Card, Collapse, Progress, Space } from "antd";
import React from "react";
import { MAX_PLAYERS_PER_TEAM } from "../constants/config";
import TeamComposition from "./TeamComposition";
import TeamCover from "./TeamCover";
const { Panel } = Collapse;
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
      className="team-card"
      style={{
        ...(!!onClick ? { cursor: "pointer" } : {}),
      }}
    >
      <Space
        direction="vertical"
        align="baseline"
        className="team-card-space"
        onClick={(e: any) => e.stopPropagation()}
      >
        <Progress
          percent={Math.ceil(
            (100 * team.players.length) / MAX_PLAYERS_PER_TEAM
          )}
          steps={MAX_PLAYERS_PER_TEAM}
          size="default"
          strokeColor={strokeColor}
        ></Progress>
        <Collapse className="team-card-space-item">
          <Panel
            key={""}
            header={
              <span>
                {team.players.length}/{MAX_PLAYERS_PER_TEAM}
              </span>
            }
          >
            <TeamComposition team={team}></TeamComposition>
          </Panel>
        </Collapse>
      </Space>
    </Card>
  );
};

export default TeamCard;
