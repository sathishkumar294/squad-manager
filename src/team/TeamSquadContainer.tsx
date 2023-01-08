import TeamSquad from "./TeamSquad";

export const TeamSquadContainer: React.FC<{
  team?: Team;
  resetSquad: () => void;
  selectedPlayer?: Player;
  onPlayerClick: (player: Player) => void;
  removePlayerFromSquad?: (player: Player) => void;
}> = ({
  team,
  resetSquad,
  selectedPlayer,
  onPlayerClick,
  removePlayerFromSquad,
}) => {
  return team ? (
    <TeamSquad
      team={team}
      removeAllPlayers={resetSquad}
      onPlayerClick={onPlayerClick}
      removePlayerFromSquad={removePlayerFromSquad}
    ></TeamSquad>
  ) : (
    <>Team not available to show</>
  );
};
