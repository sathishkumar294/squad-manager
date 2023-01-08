import { useAppSelect } from "../app/store/hooks";
import { getSelectedPlayer } from "../app/store/player";
import { getTeamForPlayer } from "../app/store/teams";
import PlayerListItem from "../player/PlayerListItem";

export const PlayerListItemContainer: React.FC<{
  player: Player;
  onPlayerClick: () => void;
  hideSelection?: boolean;
  removePlayerFromSquad?: () => void;
}> = ({ player, onPlayerClick, hideSelection, removePlayerFromSquad }) => {
  const playerTeam = useAppSelect(getTeamForPlayer(player));
  const isSelected = useAppSelect(getSelectedPlayer)?.name === player.name;
  return (
    <PlayerListItem
      {...{
        player,
        onPlayerClick,
        isSelected,
        hideSelection,
        removePlayerFromSquad,
        playerTeam,
      }}
    ></PlayerListItem>
  );
};
