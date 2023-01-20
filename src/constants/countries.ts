const countries: Country[] = [
  {
    name: "AFG",
    fullName: "Afghanistan",
    maxAllowed: 3,
    minRequired: 0,
    espnId: 40,
    logoURL:
      "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/321000/321005.png",
  },
  {
    name: "AUS",
    fullName: "Australia",
    maxAllowed: 5,
    minRequired: 1,
    espnId: 2,
    logoURL:
      "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340400/340493.png",
  },
  {
    name: "BAN",
    fullName: "Bangladesh",
    maxAllowed: 3,
    minRequired: 0,
    espnId: 25,
    logoURL:
      "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/341400/341456.png",
  },
  {
    name: "ENG",
    fullName: "England",
    maxAllowed: 5,
    minRequired: 1,
    espnId: 1,
    logoURL:
      "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313114.logo.png",
  },
  {
    name: "IND",
    fullName: "India",
    maxAllowed: 5,
    minRequired: 1,
    espnId: 6,
    logoURL:
      "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313128.logo.png",
  },
  {
    name: "NZ",
    fullName: "New Zealand",
    maxAllowed: 4,
    minRequired: 1,
    espnId: 5,
    logoURL:
      "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340500/340505.png",
  },
  {
    name: "PAK",
    fullName: "Pakistan",
    maxAllowed: 3,
    minRequired: 0,
    espnId: 7,
    logoURL:
      "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313129.logo.png",
  },
  {
    name: "RSA",
    fullName: "South Africa",
    maxAllowed: 3,
    minRequired: 0,
    espnId: 3,
    logoURL:
      "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313125.logo.png",
  },
  {
    name: "SL",
    fullName: "Sri Lanka",
    maxAllowed: 3,
    minRequired: 0,
    espnId: 8,
    logoURL:
      "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340000/340047.png",
  },
  {
    name: "WI",
    fullName: "West Indies",
    maxAllowed: 4,
    minRequired: 1,
    espnId: 4,
    logoURL:
      "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/317600/317615.png",
  },
].sort((c1, c2) => c1.name.localeCompare(c2.name));
export default countries;
