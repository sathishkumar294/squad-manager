import { Space } from "antd";
import React from "react";

const TeamCover: React.FC<{
  team: Team;
  height?: string;
  width?: string;
}> = ({ team, height }) => {
  const h = height || "96px";
  return (
    <Space
      align="center"
      style={{ padding: "8px", justifyContent: "center", display: "flex" }}
    >
      <img alt={team.name} src={team.logoUrl} height={h} />
    </Space>
  );
};

export default TeamCover;
