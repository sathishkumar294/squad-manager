import { List } from "antd";
import { useEffect } from "react";
import { useAppDispatch, useAppSelect } from "../app/store/hooks";
import {
  fetchPlayersForSelectedCountry,
  getPlayers,
} from "../app/store/player";
import countries from "../constants/countries";
import Player from "../player/Player";

const PlayerList = () => {
  const players = useAppSelect(getPlayers);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (players.length === 0) dispatch(fetchPlayersForSelectedCountry());
  }, [players, dispatch]);
  return (
    <List
      bordered
      dataSource={players}
      renderItem={(item) => <Player player={item}></Player>}
      style={{ maxHeight: "720px", overflow: "scroll" }}
    ></List>
  );
};

export default PlayerList;
