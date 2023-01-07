import { CheckCircleOutlined } from "@ant-design/icons";
import { Avatar, List } from "antd";
import React from "react";

const Player: React.FC<{
  player: Player;
  isSelected: boolean;
  onPlayerClick: () => void;
  hideSelection?: boolean;
}> = ({ player, onPlayerClick, isSelected, hideSelection }) => {
  const isPlayerSelected = hideSelection ? false : isSelected;

  const avatar = isPlayerSelected ? (
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
      onClick={onPlayerClick}
      style={{
        cursor: "pointer",
        ...(isPlayerSelected ? { backgroundColor: "#D2B4DE" } : {}),
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
