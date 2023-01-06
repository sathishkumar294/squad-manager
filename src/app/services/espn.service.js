import axios from "axios";

export const espnService = {
  getPlayers: (teamId) => {
    return axios.get(
      `https://hs-consumer-api.espncricinfo.com/v1/pages/player/search?mode=BOTH&page=1&records=40&filterActive=true&filterTeamId=${teamId}&filterClassId=3&filterFormatLevel=ALL&sort=ALPHA_ASC`
    );
  },
};
