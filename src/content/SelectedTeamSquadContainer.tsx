import { useAppDispatch, useAppSelect } from "../app/store/hooks";
import { getSelectedPlayer, selectPlayer } from "../app/store/player";
import {
  getSelectedTeam,
  removeAllPlayers,
  removePlayer,
} from "../app/store/teams";
import { TeamSquadContainer } from "../team/TeamSquadContainer";

export const SelectedTeamSquadContainer = () => {
  const selectedTeam = useAppSelect(getSelectedTeam);
  const dispatch = useAppDispatch();
  const resetSquad = () =>
    selectedTeam && dispatch(removeAllPlayers({ team: selectedTeam?.name }));
  const selectedPlayer = useAppSelect(getSelectedPlayer);
  const onPlayerClick = (player: Player) => dispatch(selectPlayer({ player }));
  const removePlayerFromSquad = (player: Player) =>
    selectedTeam &&
    dispatch(removePlayer({ player: player.name, team: selectedTeam.name }));

  return (
    <TeamSquadContainer
      team={selectedTeam}
      resetSquad={resetSquad}
      selectedPlayer={selectedPlayer}
      onPlayerClick={onPlayerClick}
      removePlayerFromSquad={removePlayerFromSquad}
    ></TeamSquadContainer>
  );
};
