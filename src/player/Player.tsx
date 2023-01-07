import { CheckCircleOutlined } from "@ant-design/icons";
import { Avatar, List } from "antd";
import React from "react";
import { useAppDispatch, useAppSelect } from "../app/store/hooks";
import { getSelectedPlayer, selectPlayer } from "../app/store/player";

const Player: React.FC<{ player: Player }> = ({ player }) => {
  const dispatch = useAppDispatch();
  const clickPlayer = () => dispatch(selectPlayer({ player }));
  const selectedPlayer = useAppSelect(getSelectedPlayer);

  const avatar =
    player.name === selectedPlayer?.name ? (
      <Avatar
        style={{ backgroundColor: "#52BE80" }}
        icon={<CheckCircleOutlined />}
      ></Avatar>
    ) : (
      <Avatar src={player.portraitUrl}></Avatar>
    );

  return (
    <List.Item
      key={player.name}
      onClick={() => clickPlayer()}
      style={{
        cursor: "pointer",
        ...(player.name === selectedPlayer?.name
          ? { backgroundColor: "#D2B4DE" }
          : {}),
      }}
    >
      <List.Item.Meta
        avatar={avatar}
        title={player.name}
        description={player.type}
      ></List.Item.Meta>
    </List.Item>
  );
};

export default Player;
