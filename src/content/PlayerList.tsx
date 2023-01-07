import { Col, List, Row } from "antd";
import Player from "../player/Player";
import Spinner from "../shared/Spinner";

const PlayerList: React.FC<{ players: Player[]; loading: boolean }> = ({
  players,
  loading,
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
      renderItem={(item) => <Player player={item}></Player>}
      style={{ maxHeight: "720px", overflow: "scroll" }}
    ></List>
  );
};

export default PlayerList;
