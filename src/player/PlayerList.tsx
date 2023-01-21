import { FlagOutlined, SortAscendingOutlined } from "@ant-design/icons";
import { Col, List, Row, Segmented } from "antd";
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
  teamIconToShow?: React.ComponentProps<
    typeof PlayerListItemContainer
  >["teamIconToShow"];
}> = ({
  players,
  loading,
  onPlayerClick,
  hidePlayerSelection,
  removePlayerFromSquad,
  teamIconToShow,
}) => {
    const getSortedPlayers = useCallback(
      (sort: keyof Player) =>
        [...players].sort((p1, p2) => p1[sort]?.localeCompare(p2[sort]!) || 0),
      [players]
    );

    const [sortedPlayers, setPlayers] = useState(getSortedPlayers("name"));
    const [sort, setSort] = useState("name" as keyof Player);
    const sortPlayers = (sort: keyof Player) => {
      setSort(sort);
    };

    useEffect(
      () => setPlayers(getSortedPlayers(sort)),
      [players, sort, getSortedPlayers]
    );

    return loading ? (
      <Row justify="center" style={{ padding: "64px" }}>
        <Col span={4}>
          <Spinner></Spinner>
        </Col>
      </Row>
    ) : (
      <Row justify="end">
        <Col>
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
        </Col>
        <Col span={24}>
          <List
            bordered
            dataSource={sortedPlayers}
            className="player-list"
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
                teamIconToShow={teamIconToShow}
              ></PlayerListItemContainer>
            )}
          ></List>
        </Col>
      </Row>
    );
  };

export default PlayerList;
