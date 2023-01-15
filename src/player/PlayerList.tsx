import { FlagOutlined, SortAscendingOutlined } from "@ant-design/icons";
import { Col, List, Row, Segmented, Space } from "antd";
import { useCallback, useEffect, useState } from "react";
import { PlayerListItemContainer } from "../content/PlayerListItemContainer";
import { BatsmanIcon } from "../shared/BatsmanIcon";
import Spinner from "../shared/Spinner";

const PlayerList: React.FC<{
  players: Player[];
  loading: boolean;
  onPlayerClick: (player: Player) => void;
  hidePlayerSelection?: boolean;
  removePlayerFromSquad?: (player: Player) => void;
}> = ({
  players,
  loading,
  onPlayerClick,
  hidePlayerSelection,
  removePlayerFromSquad,
}) => {
  const getSortedPlayers = useCallback(
    (sort: keyof Player) =>
      [...players].sort((p1, p2) => p1[sort]?.localeCompare(p2[sort]!) || 0),
    [players]
  );

  const [sortedPlayers, setPlayers] = useState(getSortedPlayers("name"));
  const sortPlayers = (sort: keyof Player) => {
    setPlayers(getSortedPlayers(sort));
  };

  useEffect(
    () => setPlayers(getSortedPlayers("name")),
    [players, getSortedPlayers]
  );

  return loading ? (
    <Row justify="center" style={{ padding: "64px" }}>
      <Col span={4}>
        <Spinner></Spinner>
      </Col>
    </Row>
  ) : (
    <Space
      direction="vertical"
      size="small"
      align="end"
      style={{ width: "100%" }}
    >
      <Segmented
        onChange={(e) => sortPlayers(e.toString() as keyof Player)}
        options={[
          {
            label: "Alpha",
            value: "name",
            icon: <SortAscendingOutlined />,
          },
          {
            label: "Role",
            value: "type",
            icon: <BatsmanIcon />,
          },
          {
            label: "Country",
            value: "country",
            icon: <FlagOutlined />,
          },
        ]}
      />
      <List
        bordered
        dataSource={sortedPlayers}
        renderItem={(player) => (
          <PlayerListItemContainer
            player={player}
            onPlayerClick={() => onPlayerClick(player)}
            hideSelection={hidePlayerSelection}
            removePlayerFromSquad={
              removePlayerFromSquad
                ? () => removePlayerFromSquad(player)
                : undefined
            }
          ></PlayerListItemContainer>
        )}
        className="player-list"
      ></List>
    </Space>
  );
};

export default PlayerList;
