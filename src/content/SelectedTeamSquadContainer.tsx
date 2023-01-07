import { useAppDispatch, useAppSelect } from "../app/store/hooks";
import { getSelectedPlayer, selectPlayer } from "../app/store/player";
import { getSelectedTeam, removeAllPlayers } from "../app/store/teams";
import { TeamSquadContainer } from "./TeamSquadContainer";

export const SelectedTeamSquadContainer = () => {
  const selectedTeam = useAppSelect(getSelectedTeam);
  const dispatch = useAppDispatch();
  const resetSquad = () =>
    selectedTeam && dispatch(removeAllPlayers({ team: selectedTeam?.name }));
  const selectedPlayer = useAppSelect(getSelectedPlayer);
  const onPlayerClick = (player: Player) => dispatch(selectPlayer({ player }));
  console.log({ selectedTeam });

  return (
    <TeamSquadContainer
      team={selectedTeam}
      resetSquad={resetSquad}
      selectedPlayer={selectedPlayer}
      onPlayerClick={onPlayerClick}
    ></TeamSquadContainer>
  );
};
