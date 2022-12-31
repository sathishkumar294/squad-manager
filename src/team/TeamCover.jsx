import { Card } from "antd";
import React from "react";

const TeamCover = ({ team }) => (
  <Card
    title={team.name}
    cover={
      <div style={{ padding: "32px" }}>
        <img alt={team.name} src={team.logo} height="64px" width="64px" />
      </div>
    }
  ></Card>
);

export default TeamCover;
