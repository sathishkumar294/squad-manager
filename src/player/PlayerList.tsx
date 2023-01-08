import { Col, List, Row } from "antd";
import PlayerListItem from "./PlayerListItem";
import Spinner from "../shared/Spinner";

const PlayerList: React.FC<{
  players: Player[];
  loading: boolean;
  selectedPlayer?: Player;
  onPlayerClick: (player: Player) => void;
  hidePlayerSelection?: boolean;
}> = ({
  players,
  loading,
  selectedPlayer,
  onPlayerClick,
  hidePlayerSelection,
}) => {
  return loading ? (
    <Row justify="center" style={{ padding: "64px" }}>
      <Col span={4}>
        <Spinner></Spinner>
      </Col>
    </Row>
  ) : (
    <List
      bordered
      dataSource={players}
      renderItem={(player) => (
        <PlayerListItem
          player={player}
          isSelected={selectedPlayer?.name === player.name}
          onPlayerClick={() => onPlayerClick(player)}
          hideSelection={hidePlayerSelection}
        ></PlayerListItem>
      )}
      style={{ maxHeight: "720px", overflow: "scroll" }}
    ></List>
  );
};

export default PlayerList;
