import axios from "axios";

export namespace BBLService {
  export const getPlayersForTeam = async (teamId: number) => {
    const r = await axios.post(
      "https://www.cricket.com.au/cricketcomau/players/GetTeamPlayers",
      {
        teamId,
      }
    );
    return r.data;
  };
}
