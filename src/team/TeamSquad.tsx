import { Button, Card } from "antd";
import React from "react";
import PlayerList from "../content/PlayerList";
import TeamCover from "./TeamCover";

const TeamSquad: React.FC<{
  team: Team;
  removeAllPlayers: () => void;
  selectedPlayer?: Player;
  onPlayerClick: (player: Player) => void;
}> = ({ team, removeAllPlayers, selectedPlayer, onPlayerClick }) => {
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
        selectedPlayer={selectedPlayer}
        onPlayerClick={onPlayerClick}
        hidePlayerSelection={true}
      ></PlayerList>
    </Card>
  );
};

export default TeamSquad;
