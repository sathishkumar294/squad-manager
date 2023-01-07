import { Col, List } from "antd";
import React from "react";
import { useAppDispatch, useAppSelect } from "../app/store/hooks";
import { getSelectedPlayer, selectPlayer } from "../app/store/player";

const Player: React.FC<{ player: Player }> = ({ player }) => {
  const dispatch = useAppDispatch();
  const clickPlayer = () => dispatch(selectPlayer({ player }));
  const selectedPlayer = useAppSelect(getSelectedPlayer);

  return (
    <List.Item
      onClick={() => clickPlayer()}
      style={{
        cursor: "pointer",
        border: selectedPlayer?.name === player.name ? "2px solid red" : "",
      }}
    >
      <Col span={16}>
        <span style={{ fontWeight: "bold" }}>{player.name}</span>
        <br />
        <span>{player.country}</span>
      </Col>
      <Col span={8}>{player.type}</Col>
    </List.Item>
  );
};

export default Player;
