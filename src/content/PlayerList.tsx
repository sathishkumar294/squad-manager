import { List } from "antd";
import { useEffect } from "react";
import { useAppDispatch, useAppSelect } from "../app/store/hooks";
import { fetchPlayersForCountry, getPlayers } from "../app/store/player";
import countries from "../constants/countries";
import Player from "../player/Player";

const PlayerList = () => {
  const players = useAppSelect(getPlayers);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (players.length === 0)
      dispatch(
        fetchPlayersForCountry(countries.find((c) => c.name === "IND")!)
      );
  }, [players, dispatch]);
  return (
    <List
      header="Players"
      bordered
      dataSource={players}
      renderItem={(item) => <Player player={item}></Player>}
    ></List>
  );
};

export default PlayerList;
