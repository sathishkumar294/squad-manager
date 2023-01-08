import { FlagOutlined, SortAscendingOutlined } from "@ant-design/icons";
import { Col, List, Row, Segmented, Space } from "antd";
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
        options={[
          {
            label: "Alpha",
            value: "player",
            icon: <SortAscendingOutlined />,
          },
          {
            label: "Role",
            value: "role",
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
        dataSource={players}
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
        style={{ maxHeight: "720px", overflow: "scroll", width: "100%" }}
        className="player-list"
      ></List>
    </Space>
  );
};

export default PlayerList;
