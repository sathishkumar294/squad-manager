import { CheckCircleOutlined, CloseOutlined } from "@ant-design/icons";
import { Avatar, Button, List, Tooltip } from "antd";
import React from "react";
import countries from "../constants/countries";

const PlayerListItem: React.FC<{
  player: Player;
  isSelected: boolean;
  onPlayerClick: () => void;
  hideSelection?: boolean;
  removePlayerFromSquad?: () => void;
  playerTeam?: Team;
  teamIconToShow?: "team" | "country";
}> = ({
  player,
  onPlayerClick,
  isSelected,
  hideSelection,
  removePlayerFromSquad,
  playerTeam,
  teamIconToShow,
}) => {
  const isPlayerSelected = hideSelection ? false : isSelected;
  const playerCountry = countries.find((c) => player.country === c.name);
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
      actions={[
        ...(removePlayerFromSquad
          ? [
              <Tooltip title="Remove from squad">
                <Button
                  danger
                  shape="circle"
                  icon={<CloseOutlined />}
                  onClick={removePlayerFromSquad}
                  className="player-remove-icon"
                ></Button>
              </Tooltip>,
            ]
          : []),
        ...(playerTeam
          ? [
              <Avatar
                key={
                  (teamIconToShow || "team") === "team"
                    ? playerTeam.name
                    : playerCountry?.name
                }
                src={
                  (teamIconToShow || "team") === "team"
                    ? playerTeam.smallLogoUrl
                    : playerCountry?.logoURL
                }
              ></Avatar>,
            ]
          : []),
      ]}
    >
      <List.Item.Meta
        avatar={avatar}
        title={player.name}
        description={player.type}
      ></List.Item.Meta>
    </List.Item>
  );
};

export default PlayerListItem;
