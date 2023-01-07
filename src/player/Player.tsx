import { Avatar, List } from "antd";
import React from "react";
import { useAppDispatch, useAppSelect } from "../app/store/hooks";
import { getSelectedPlayer, selectPlayer } from "../app/store/player";

const Player: React.FC<{ player: Player }> = ({ player }) => {
  const dispatch = useAppDispatch();
  const clickPlayer = () => dispatch(selectPlayer({ player }));
  const selectedPlayer = useAppSelect(getSelectedPlayer);

  return (
    <List.Item
      key={player.name}
      onClick={() => clickPlayer()}
      style={{
        cursor: "pointer",
        border: selectedPlayer?.name === player.name ? "2px solid red" : "",
      }}
    >
      <List.Item.Meta
        avatar={<Avatar src={player.portraitUrl}></Avatar>}
        title={player.name}
        description={player.type}
      ></List.Item.Meta>
    </List.Item>
  );
};

export default Player;
