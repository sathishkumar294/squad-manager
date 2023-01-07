import { Col, Row } from "antd";
import { useAppDispatch, useAppSelect } from "../app/store/hooks";
import { addPlayer, selectTeams } from "../app/store/teams";
import TeamCard from "../team/TeamCard";

const TeamList = () => {
  const teams = useAppSelect(selectTeams);
  const dispatch = useAppDispatch();
  const onTeamSelect = (team: string) => {
    dispatch(
      addPlayer({
        player: { name: "Virat Kohli", type: "Batsman", country: "IND" },
        team,
      })
    );
  };
  return (
    <Row justify="space-between" wrap={true} align="top">
      {teams.map((team, i) => (
        <Col span={8} key={i}>
          <TeamCard
            team={team}
            onClick={() => onTeamSelect(team.name)}
          ></TeamCard>
        </Col>
      ))}
    </Row>
  );
};

export default TeamList;
