import * as React from "react";
import { url } from "framer/resource";

let thewitcher = "./code/images/02_NF_TheWitcher_SocialSkin_facebook.jpg";
let thewitcherPath = url(thewitcher).replace("/preview", "");
let thewitcherWallpaper = "./code/images/wallpaper/netflix-the-witcher-cm.jpg";
let thewitcherWallpaperPath = url(thewitcherWallpaper).replace("/preview", "");
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

let django = "./code/images/34838-269882.jpg";
let djangoPath = url(django).replace("/preview", "");
let djangoWallpaper =
  "./code/images/wallpaper/movies-selective-coloring-Gentleman-Leonardo-DiCaprio-Person-Django-Unchained-178864.jpg";
let djangoWallpaperPath = url(djangoWallpaper).replace("/preview", "");

let darkknightrises =
  "./code/images/the-dark-knight-rises-2012-hd-wallpaper-preview.jpg";
let darkknightrisesPath = url(darkknightrises).replace("/preview", "");
let darkknightrisesWallpaper = "./code/images/wallpaper/OARBaV.jpg";
let darkknightrisesWallpaperPath = url(darkknightrisesWallpaper).replace(
  "/preview",
  ""
);

let riseempire = "./code/images/maxresdefault.jpg";
let riseempirePath = url(riseempire).replace("/preview", "");
let riseempireWallpaper = "./code/images/wallpaper/300riseofanempire-3.jpg";
let riseempireWallpaperPath = url(riseempireWallpaper).replace("/preview", "");

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
  },
];
