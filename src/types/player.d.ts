interface Player {
  name: string;
  country: string;
  type: PlayerType;
  potrait?: string;
}

type PlayerType = "Batsman" | "Bowler" | "Wicket-keeper" | "All-rounder";
