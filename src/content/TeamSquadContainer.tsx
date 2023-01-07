import TeamSquad from "../team/TeamSquad";

export const TeamSquadContainer: React.FC<{
  team?: Team;
  resetSquad: () => void;
  selectedPlayer?: Player;
  onPlayerClick: (player: Player) => void;
}> = ({ team, resetSquad, selectedPlayer, onPlayerClick }) => {
  return team ? (
    <TeamSquad
      team={team}
      removeAllPlayers={resetSquad}
      selectedPlayer={selectedPlayer}
      onPlayerClick={onPlayerClick}
    ></TeamSquad>
  ) : (
    <>Team not available to show</>
  );
};
