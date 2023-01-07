import { Col, Row, Space } from "antd";
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
    <Space wrap={true} size="large" align="center">
      {teams.map((team, i) => (
        <TeamCard
          team={team}
          onClick={() => onTeamSelect(team.name)}
        ></TeamCard>
      ))}
    </Space>
  );
};

export default TeamList;
