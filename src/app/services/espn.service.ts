import axios, { AxiosResponse } from "axios";
import countries from "../../constants/countries";

export namespace ESPNService {
  export const getPlayers = async (teamId: number) => {
    const r = await axios.get<
      string,
      AxiosResponse<ESPNPlayerSearchResponse, string>
    >(
      `https://hs-consumer-api.espncricinfo.com/v1/pages/player/search?mode=BOTH&page=1&records=40&filterActive=true&filterTeamId=${teamId}&filterClassId=3&filterFormatLevel=ALL&sort=ALPHA_ASC`
    ).catch(e => {
      console.error({ e });
      return { data: { results: [] } }
    });
    return r.data.results.map(getPlayerForEspnPlayer);
  };
  const getPlayerForEspnPlayer = (espnPlayer: ESPNPlayer): Player => {
    return {
      country:
        countries.find((c) => c.espnId === espnPlayer.countryTeamId)?.name ||
        "ABC",
      name: espnPlayer.longName,
      portraitUrl:
        "https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci" +
        espnPlayer.imageUrl,
      type: getPlayerTypeForEspnPlayerType(espnPlayer.playingRole),
    };
  };
  const getPlayerTypeForEspnPlayerType = (
    espnType: ESPNPlayingRole
  ): PlayerType => {
    switch (espnType) {
      case "allrounder":
        return "All-rounder";
      case "batter":
      case "opening batter":
      case "top-order batter":
      case "middle-order batter":
        return "Batsman";
      case "bowler":
        return "Bowler";
      case "bowling allrounder":
      case "batting allrounder":
        return "All-rounder";
      case "wicketkeeper batter":
        return "Wicket-keeper";
    }
  };
}
