import { Col, Row } from "antd";
import { useAppDispatch, useAppSelect } from "../app/store/hooks";
import { getSelectedPlayer } from "../app/store/player";
import { addPlayer, selectTeams } from "../app/store/teams";
import TeamCard from "../team/TeamCard";

const TeamList = () => {
  const teams = useAppSelect(selectTeams);
  const selectedPlayer = useAppSelect(getSelectedPlayer);
  const dispatch = useAppDispatch();
  const onTeamSelect = (team: string) => {
    selectedPlayer
      ? dispatch(
          addPlayer({
            player: selectedPlayer,
            team,
          })
        )
      : console.warn("Player not selected");
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
