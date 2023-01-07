import { Col, List, Row } from "antd";
import { useEffect } from "react";
import { useAppDispatch, useAppSelect } from "../app/store/hooks";
import {
  fetchPlayersForSelectedCountry,
  getPlayers,
  isPlayersLoading,
} from "../app/store/player";
import Player from "../player/Player";
import Spinner from "../shared/Spinner";

const PlayerList = () => {
  const players = useAppSelect(getPlayers);
  const loading = useAppSelect(isPlayersLoading);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (players.length === 0) dispatch(fetchPlayersForSelectedCountry());
  }, [players, dispatch]);
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
