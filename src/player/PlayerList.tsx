import { Col, List, Row } from "antd";
import { PlayerListItemContainer } from "../content/PlayerListItemContainer";
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
      style={{ maxHeight: "720px", overflow: "scroll" }}
    ></List>
  );
};

export default PlayerList;
