import { List } from "antd";
import { useSelector } from "react-redux";
import { selectPlayers } from "../app/store/player";
import Player from "../player/Player";

const PlayerList = () => {
  const players = useSelector(selectPlayers);

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
