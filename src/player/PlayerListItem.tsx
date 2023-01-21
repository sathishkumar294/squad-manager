import { CheckCircleOutlined, CloseOutlined } from "@ant-design/icons";
import { Avatar, AvatarProps, Button, List, Tooltip } from "antd";
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

    const avatarIconProps: AvatarProps & { key: string } = (teamIconToShow || 'team') === 'team' ? {
      shape: 'circle',
      key: playerTeam?.name || '',
      src: playerTeam?.smallLogoUrl
    } : {
      shape: 'square',
      src: playerCountry?.logoURL,
      key: playerCountry?.name || ''
    }

    return (
      <List.Item
        key={player.name}
        onClick={onPlayerClick}
        className={[isPlayerSelected ? 'selected-player' : '', 'player-item'].join(' ')}
        actions={[

          ...(playerTeam
            ? [
              <Avatar
                {...avatarIconProps}
              ></Avatar>,
            ]
            : []), ...(removePlayerFromSquad
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
