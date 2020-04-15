import * as React from "react";
import { url } from "framer/resource";

// WITCHER COVER
let thewitcher = "./code/images/cover/02_NF_TheWitcher_SocialSkin_facebook.jpg";
let thewitcherPath = url(thewitcher).replace("/preview", "");
// WITCHER WALLPAPER
let thewitcherWallpaper = "./code/images/wallpaper/netflix-the-witcher-cm.jpg";
let thewitcherWallpaperPath = url(thewitcherWallpaper).replace("/preview", "");
// WITCHER AVATAR
let avatarWitcherCiri = "./code/images/avatar/witcherCiri.jpg";
let avatarWitcherCiriPath = url(avatarWitcherCiri).replace("/preview", "");
let avatarWitcherYennefer = "./code/images/avatar/witcherYennefer.jpg";
let avatarWitcherYenneferPath = url(avatarWitcherYennefer).replace(
  "/preview",
  ""
);
let avatarWitcherGeraltofRivia =
  "./code/images/avatar/witcherGeraltofRivia.jpg";
let avatarWitcherGeraltofRiviaPath = url(avatarWitcherGeraltofRivia).replace(
  "/preview",
  ""
);

// DJANGO COVER
let django = "./code/images/cover/34838-269882.jpg";
let djangoPath = url(django).replace("/preview", "");
// DJANGO WALLPAPER
let djangoWallpaper =
  "./code/images/wallpaper/movies-selective-coloring-Gentleman-Leonardo-DiCaprio-Person-Django-Unchained-178864.jpg";
let djangoWallpaperPath = url(djangoWallpaper).replace("/preview", "");
// DJANGO AVATAR
let avatarDjangoDjango = "./code/images/avatar/djangoDjango.jpg";
let avatarDjangoDjangoPath = url(avatarDjangoDjango).replace("/preview", "");
let avatarDjangoCalvinCandie = "./code/images/avatar/djangoCalvinCandie.jpg";
let avatarDjangoCalvinCandiePath = url(avatarDjangoCalvinCandie).replace(
  "/preview",
  ""
);
let avatarDjangoDrKingSchultz = "./code/images/avatar/djangoDrKingSchultz.jpg";
let avatarDjangoDrKingSchultzPath = url(avatarDjangoDrKingSchultz).replace(
  "/preview",
  ""
);

// DARK KNIGHT COVER
let darkknightrises =
  "./code/images/cover/the-dark-knight-rises-2012-hd-wallpaper-preview.jpg";
let darkknightrisesPath = url(darkknightrises).replace("/preview", "");
// DARK KNIGHT WALLPAPER
let darkknightrisesWallpaper = "./code/images/wallpaper/OARBaV.jpg";
let darkknightrisesWallpaperPath = url(darkknightrisesWallpaper).replace(
  "/preview",
  ""
);
// DARK KNIGHT AVATAR
let avatarBruceWayne = "./code/images/avatar/darkknightrisesBruceWayne.jpg";
let avatarBruceWaynePath = url(avatarBruceWayne).replace("/preview", "");
let avatarCommissionerGordon =
  "./code/images/avatar/darkknightrisesCommissionerGordon.jpg";
let avatarCommissionerGordonPath = url(avatarCommissionerGordon).replace(
  "/preview",
  ""
);
let avatarBane = "./code/images/avatar/darkknightrisesBane.jpg";
let avatarBanePath = url(avatarBane).replace("/preview", "");
let avatarSelina = "./code/images/avatar/darkknightrisesSelina.jpg";
let avatarSelinaPath = url(avatarSelina).replace("/preview", "");

// 300 COVER
let riseempire = "./code/images/cover/maxresdefault.jpg";
let riseempirePath = url(riseempire).replace("/preview", "");
// 300 WALLPAPER
let riseempireWallpaper = "./code/images/wallpaper/300riseofanempire-3.jpg";
let riseempireWallpaperPath = url(riseempireWallpaper).replace("/preview", "");
// 300 AVATAR
let avatarThemistokles = "./code/images/avatar/300riseempireThemistokles.jpg";
let avatarThemistoklesPath = url(avatarThemistokles).replace("/preview", "");
let avatarArtemisia = "./code/images/avatar/300riseempireArtemisia.jpg";
let avatarArtemisiaPath = url(avatarArtemisia).replace("/preview", "");
let avatarQueenGorgo = "./code/images/avatar/300riseempireQueenGorgo.jpg";
let avatarQueenGorgoPath = url(avatarQueenGorgo).replace("/preview", "");

export const movies = [
  {
    key: 1,
    image: thewitcherPath,
    wallpaper: thewitcherWallpaperPath,
    title: "The Witcher",
    year: 2019,
    maturityNumber: "16+",
    type: "1 Season",
    genre: "TV Action & Adventure",
    color: "#ff0055",
    avatars: [
      {
        summonerName: "Geralt of Rivia",
        realName: "Henry Cavill",
        image: avatarWitcherGeraltofRiviaPath,
      },
      {
        summonerName: "Ciri",
        realName: "Freya Allan",
        image: avatarWitcherCiriPath,
      },
      {
        summonerName: "Yennefer",
        realName: "Anya Chalotra",
        image: avatarWitcherYenneferPath,
      },
      // avatarWitcherGeraltofRiviaPath,
      // avatarWitcherCiriPath,
      // avatarWitcherYenneferPath,
    ],
  },
  {
    key: 2,
    image: djangoPath,
    wallpaper: djangoWallpaperPath,
    title: "Django Unchained",
    year: 2012,
    maturityNumber: "18+",
    type: "Movie",
    genre: "Drama, Western",
    color: "#0099ff",
    avatars: [
      {
        summonerName: "Django",
        realName: "Jamie Foxx",
        image: avatarDjangoDjangoPath,
      },
      {
        summonerName: "Dr. King Schultz",
        realName: "Christoph Waltz",
        image: avatarDjangoDrKingSchultzPath,
      },
      {
        summonerName: "Calvin Candie",
        realName: "Leonardo DiCaprio",
        image: avatarDjangoCalvinCandiePath,
      },
    ],
  },
  {
    key: 3,
    image: darkknightrisesPath,
    wallpaper: darkknightrisesWallpaperPath,
    title: "The Dark Knight Rises",
    year: 2012,
    maturityNumber: "15+",
    type: "Movie",
    genre: "Action, Adventure",
    color: "#22cc88",
    avatars: [
      {
        summonerName: "Bruce Wayne",
        realName: "Christian Bale",
        image: avatarBruceWaynePath,
      },
      {
        summonerName: "Commissioner Gordon",
        realName: "Gary Oldman",
        image: avatarCommissionerGordonPath,
      },
      {
        summonerName: "Bane",
        realName: "Tom Hardy",
        image: avatarBanePath,
      },
      {
        summonerName: "Selina",
        realName: "Anne Hathaway",
        image: avatarSelinaPath,
      },
    ],
  },
  {
    key: 4,
    image: riseempirePath,
    wallpaper: riseempireWallpaperPath,
    title: "300: Rise of an Empire",
    year: 2014,
    maturityNumber: "17+",
    type: "Movie",
    genre: "Action, Drama",
    color: "#ffaa00",
    avatars: [
      {
        summonerName: "Themistokles",
        realName: "Sullivan Stapleton",
        image: avatarThemistoklesPath,
      },
      {
        summonerName: "Artemisia",
        realName: "Eva Green",
        image: avatarArtemisiaPath,
      },
      {
        summonerName: "Queen Gorgo",
        realName: "Lena Headey",
        image: avatarQueenGorgoPath,
      },
    ],
  },
];
