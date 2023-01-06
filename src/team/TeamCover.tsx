import React from "react";

const TeamCover: React.FC<{
  team: Team;
  height?: string;
  width?: string;
}> = ({ team, height, width }) => {
  const h = height || "64px";
  const w = width || "64px";
  return (
    <div style={{ padding: "32px" }}>
      <img alt={team.name} src={team.logo} height={h} width={w} />
    </div>
  );
};

export default TeamCover;