import { Col, Row, Select } from "antd";
import { useEffect } from "react";
import { useAppDispatch, useAppSelect } from "../app/store/hooks";
import {
  fetchPlayersForSelectedCountry,
  getPlayers,
  getSelectedPlayer,
  isPlayersLoading,
  selectCountry,
  selectPlayer,
} from "../app/store/player";
import countries from "../constants/countries";
import PlayerList from "../player/PlayerList";

export const PlayerListContainer: React.FC<{
  hidePlayerSelection?: boolean;
}> = ({ hidePlayerSelection }) => {
  const dispatch = useAppDispatch();
  const clickCountry = (cName: string) =>
    dispatch(selectCountry(countries.find((c) => c.name === cName)!));
  const players = useAppSelect(getPlayers);
  const loading = useAppSelect(isPlayersLoading);
  const selectedPlayer = useAppSelect(getSelectedPlayer);
  const onPlayerClick = (player: Player) => dispatch(selectPlayer({ player }));
  useEffect(() => {
    if (players.length === 0) dispatch(fetchPlayersForSelectedCountry());
  }, [players, dispatch]);

  return (
    <>
      <Row justify="space-evenly">
        <Col span={24}>
          <Select
            defaultValue="IND"
            options={countries.map((c) => ({ value: c.name, label: c.name }))}
            onChange={clickCountry}
            style={{ width: "100%" }}
          ></Select>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <PlayerList
            {...{
              players,
              loading,
              selectedPlayer,
              onPlayerClick,
              hidePlayerSelection,
            }}
          ></PlayerList>
        </Col>
      </Row>
    </>
  );
};
