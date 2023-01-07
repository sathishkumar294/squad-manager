const countries: Country[] = [
  { name: "AFG", maxAllowed: 3, minRequired: 0, espnId: 40 },
  { name: "AUS", maxAllowed: 3, minRequired: 1, espnId: 2 },
  { name: "BAN", maxAllowed: 3, minRequired: 0, espnId: 25 },
  { name: "ENG", maxAllowed: 3, minRequired: 1, espnId: 1 },
  { name: "IND", maxAllowed: 3, minRequired: 1, espnId: 6 },
  { name: "NZ", maxAllowed: 3, minRequired: 1, espnId: 5 },
  { name: "PAK", maxAllowed: 3, minRequired: 0, espnId: 7 },
  { name: "RSA", maxAllowed: 3, minRequired: 1, espnId: 3 },
  { name: "SL", maxAllowed: 3, minRequired: 0, espnId: 8 },
  { name: "WI", maxAllowed: 3, minRequired: 0, espnId: 4 },
].sort((c1, c2) => c1.name.localeCompare(c2.name));
export default countries;
