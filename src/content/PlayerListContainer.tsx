import { Col, Row, Select } from "antd";
import { useAppDispatch } from "../app/store/hooks";
import { selectCountry } from "../app/store/player";
import countries from "../constants/countries";
import PlayerList from "./PlayerList";

export const PlayerListContainer = () => {
  const dispatch = useAppDispatch();
  const clickCountry = (cName: string) =>
    dispatch(selectCountry(countries.find((c) => c.name === cName)!));

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
          <PlayerList></PlayerList>
        </Col>
      </Row>
    </>
  );
};
