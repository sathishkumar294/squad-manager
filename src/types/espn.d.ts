interface ESPNPlayerSearchResponse {
  objects: any;
  results: ESPNPlayer[];
  total: number;
}

interface ESPNPlayer {
  id: number;
  objectId: number;
  name: string;
  longName: string;
  mobileName: string;
  indexName: string;
  battingName: string;
  slug: string;
  imageUrl: string;
  fieldingName: string;
  gender: "M" | "F";
  playingRole: ESPNPlayingRole;
  battingStyles: string[];
  bowlingStyles: string[];
  longBattingStyles: string[];
  longBowlingStyles: string[];
  image: {
    id: id;
    objectId: id;
    slug: string;
    url: string;
    width: number;
    height: number;
    caption: string;
    longCaption: string;
    credit: string;
    photographer?: string;
    peerUrls?: string;
  };
  countryTeamId: number;
  playingRoleType: string;
  playingRoles: ESPNPlayingRole[];
  playingType?: string;
  dateOfBirth: ESPNDate;
  dateOfDeath?: ESPNDate;
}

interface ESPNDate {
  year: number;
  month: number;
  date: number;
}

type ESPNPlayingRole =
  | "bowler"
  | "bowling allrounder"
  | "batter"
  | "allrounder"
  | "wicketkeeper batter"
  | "top-order batter"
  | "opening batter"
  | "middle-order batter"
  | "batting allrounder";
