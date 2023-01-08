import { Button, Card } from "antd";
import React from "react";
import PlayerList from "../player/PlayerList";
import TeamCover from "./TeamCover";

const TeamSquad: React.FC<{
  team: Team;
  removeAllPlayers: () => void;
  onPlayerClick: (player: Player) => void;
  removePlayerFromSquad?: (player: Player) => void;
}> = ({ team, removeAllPlayers, onPlayerClick, removePlayerFromSquad }) => {
  return (
    <Card
      title={team.name}
      cover={<TeamCover team={team} width="128px"></TeamCover>}
      bordered={false}
      style={{ minWidth: 400 }}
      actions={[
        <Button danger onClick={removeAllPlayers}>
          Delete all
        </Button>,
      ]}
    >
      <PlayerList
        players={team.players}
        loading={false}
        onPlayerClick={onPlayerClick}
        hidePlayerSelection={true}
        removePlayerFromSquad={removePlayerFromSquad}
      ></PlayerList>
    </Card>
  );
};

export default TeamSquad;
