import { useAppDispatch, useAppSelect } from "../app/store/hooks";
import { getSelectedPlayer, selectPlayer } from "../app/store/player";
import { getSelectedTeam, removeAllPlayers } from "../app/store/teams";
import { TeamSquadContainer } from "../team/TeamSquadContainer";

export const SelectedTeamSquadContainer = () => {
  const selectedTeam = useAppSelect(getSelectedTeam);
  const dispatch = useAppDispatch();
  const resetSquad = () =>
    selectedTeam && dispatch(removeAllPlayers({ team: selectedTeam?.name }));
  const selectedPlayer = useAppSelect(getSelectedPlayer);
  const onPlayerClick = (player: Player) => dispatch(selectPlayer({ player }));

  return (
    <TeamSquadContainer
      team={selectedTeam}
      resetSquad={resetSquad}
      selectedPlayer={selectedPlayer}
      onPlayerClick={onPlayerClick}
    ></TeamSquadContainer>
  );
};
