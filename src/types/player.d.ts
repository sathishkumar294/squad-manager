interface Player {
  name: string;
  country: string;
  type: PlayerType;
  portraitUrl?: string;
}

type PlayerType = "Batsman" | "Bowler" | "Wicket-keeper" | "All-rounder";
