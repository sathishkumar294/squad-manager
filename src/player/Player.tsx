import { Col, List } from "antd";
import React from "react";
import { useAppDispatch } from "../app/store/hooks";
import { getPlayers, selectPlayer } from "../app/store/player";

const Player: React.FC<{ player: Player }> = ({ player }) => {
  const dispatch = useAppDispatch();
  const clickPlayer = () => dispatch(selectPlayer({ player }));

  return (
    <List.Item onClick={() => clickPlayer()}>
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
