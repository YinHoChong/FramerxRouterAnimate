import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";
import { useState } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useHoverIntent } from "./use-hover-intent";
import styled from "styled-components";
import { url } from "framer/resource";
import { AnimateSharedLayoutGallery } from "../AnimateSharedLayoutGallery/AnimateSharedLayoutGallery";

// import { movies } from "../../../data/MoviesData";
import useStore from "../../../utils/store";

/// GALLERY
import { movies } from "../../../data/MoviesData";
import { wrap } from "@popmotion/popcorn";

import { Link } from "react-router-dom";

// Open Preview: Command + P
// Learn more: https://framer.com/api

// const colors = ["#22cc88", "#ffcc00", "#0099ff", "#ff0055"];
// const colors = [thewitcherPath, thewitcherPath, thewitcherPath, thewitcherPath];

const StyledCovers = styled.ul`
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  list-style: none;
  height: 126px;
  padding: 0;
  width: 100%;
  margin-left: 20px;

  position: absolute;
  z-index: 2;
  top: calc(60% + 200px);
  left: calc(50% - 300px);
`;

//   ul.open li:first-child {
//     margin-left: 0px;
//   }

// const ListItem = styled(motion.li)`
//   background-color: var(--highlight);
//   // background-image: url(--image);
//   border-radius: 10px;
//   padding: 20px;
//   overflow: hidden;
//   cursor: pointer;
//   width: 225px;
//   height: 126px;
//   flex: 225px 0 0;
//   margin-right: 5px;

//   ${({ opened }) =>
//     opened &&
//     `
//     margin-top: -62px;
//     flex: 440px 0 0;
//     height: 250px;
// `}
// `;

const Cover = styled(motion.li)`
  // background-color: var(--highlight);
  // background-image: url(--image);
  border-radius: 10px;
  // padding: 20px;
  overflow: hidden;
  cursor: pointer;
  width: 200px;
  height: 100px;
  flex: 200px 0 0;
  margin-right: 8px;
  box-shadow: 0px 2px 5px 0px rgba(255, 255, 255, 0.2);

  img {
    object-fit: cover;
    // border: 1px solid #ddd;
    // border-radius: 4px;
    // padding: 5px;
    width: 100%;
    height: 100%;
  }

  &:hover {
    box-shadow: 0px 2px 5px 0px rgba(255, 255, 255, 0.5);
  }

  // img:hover {
  // box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
  // box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.35);
  // }

  ${({ opened }) =>
    opened &&
    `
    margin-top: -62px;
    flex: 400px 0 0;
    height: 200px;
`}s
`;

const StyledBox = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledImgMotion = styled(motion.img)`
  position: absolute;
  // max-width: 105%;

  object-fit: cover;
  max-width: 105%;
  min-height: 100%;
`;

const StyledMetaInfoMotionUl = styled(motion.ul)`
  position: absolute;
  margin: 0;
  padding-top: 25%;
  padding-left: 80px;

  // position: fixed;
  // top: 50px;
  // right: 50px;
  z-index: 2;
`;

const StyledTitleMotion = styled(motion.li)`
  // text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.6);
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.45);
  font-family: "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", "sans-serif", serif;
  color: #ffffff;
  font-size: 70px;
  letter-spacing: 0px;
  line-height: 1.2;

  list-style: none;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const StyledMetaInfoMotion = styled(StyledTitleMotion)`
  font-size: 30px;
  color: a1a1a1;
`;

const Label = styled.span`
  border: 1px solid #a1a1a1;
  color: a1a1a1;
  padding: 0 5px;
  margin: 8px;
`;

const StyledFilterMotion = styled(motion.div)`
  position: absolute;
  margin: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    270deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.7) 100%
  );
`;

const StyledAvatarImg = styled(motion.img)`
  object-fit: cover;
  border-radius: 50%;
  width: 90px;
  height: 90px;
  border: 2px solid rgba(250, 250, 250, 0.2);
  box-shadow: 0px 2px 3px 0px rgba(250, 250, 250, 0.1);
  cursor: pointer;
  margin-right: 16px;
`;

const StyledOverlay = styled(motion.div)`
  background: black;
  position: absolute;
  margin: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  cursor: pointer;
`;

const StyledSingleImageContainer = styled(motion.div)`
  position: absolute;
  margin: 0;
  top: 0;
  // left: 0;
  // bottom: 0;
  // right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  // margin: auto;
  // background: red;
  width: 100%;
  height: 100%;
  z-index: 3;
  flex-direction: column;
  cursor: pointer;
`;

const StyledBigAvatarImg = styled(StyledAvatarImg)`
  border-radius: 20px;
  width: 100%;
  height: 100%;
  border: none;
  box-shadow: none;
  // border: 2px solid;
  // border-image: radial-gradient(rgb(0, 143, 104), rgb(250, 224, 66)) 1;
`;

const StyledAvatarWrapper = styled(motion.div)`
  position: relative;
  text-align: center;
  color: white;
  width: 900px;
  height: 650px;
  // &::before {
  //   position: absolute;
  //   content: " ";
  //   bottom: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 33%;
  //   background-image: linear-gradient(to top, #fff, rgba(0, 0, 0, 0));
  // }
`;

const StyledBackgroundNames = styled(motion.div)`
  position: absolute;
  content: " ";
  bottom: 0;
  left: 0;
  width: 100%;
  height: 33%;
  border-radius: 0 0 20px 20px;
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.7) 100%
  );
`;

const StyledAvatarNames = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: absolute;
  bottom: 40px;
  left: 40px;
  color: white;
  font-size: 30px;
`;

const StyledSummonerName = styled(motion.div)`
  color: white;
  font-size: 50px;
  font-weight: bold;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.25);
`;

const StyledRealName = styled(motion.div)`
  color: rgb(187, 187, 187);
  font-size: 30px;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.25);
`;

//   li:last-child {
//     margin-right: 0px;
//   }

//   li.open {
//     margin-top: -62px;
//     flex: 440px 0 0;
//     height: 250px;
//   }

// BEFORE
// function Item({ color, currentColor, setColor, image, ...props }) {
//   const isOpen = color === currentColor;
//   const handlers = useHoverIntent(
//     () => setColor(color),
//     () => isOpen && setColor(false),
//     !currentColor
//   );

//   return (
//     <ListItem
//       animate
//       transition={{ duration: 0.4, ease: [0.37, 0.04, 0.2, 1] }}
//       //   className={isOpen ? "open" : undefined}
//       opened={isOpen ? "opened" : undefined}
//       style={{ "--highlight": color, "--image": image }}
//       {...props}
//       {...handlers}
//     />
//   );
// }

// let thewitcher = "./code/images/02_NF_TheWitcher_SocialSkin_facebook.jpg";
// let thewitcherPath = url(thewitcher).replace("/preview", "");
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

function MovieItem({ color, currentColor, setColor, image, ...props }) {
  const isOpen = color === currentColor;
  const handlers = useHoverIntent(
    () => setColor(color),
    () => isOpen && setColor(false),
    !currentColor
  );

  return (
    <Cover
      animate
      transition={{ duration: 0.4, ease: [0.37, 0.04, 0.2, 1] }}
      //   className={isOpen ? "open" : undefined}
      opened={isOpen ? "opened" : undefined}
      style={{ "--highlight": color, "--image": image }}
      {...props}
      {...handlers}
    />
  );
}

// GALLERY
const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -100,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -100,
      opacity: 0,
    };
  },
};

// TEXT
const transition = {
  duration: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96],
};
const avatarInfos = {
  exit: { y: 10, opacity: 0, duration: 0, ease: [0.43, 0.13, 0.23, 0.96] },
  enter: { y: 0, opacity: 1, transition: { delay: 0.5, ...transition } },
};

// const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

// List Meta info movie
const metaInfoVariantsUl = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05 },
  },
};

const metaInfoVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: 150,
    opacity: 0,
    transition: {
      x: { stiffness: 1000 },
    },
  },
  exit: {
    x: -50,
    opacity: 0,
    transition: {
      x: { stiffness: 1000 },
    },
  },
};

const backgroundImageVariants = {
  open: {
    x: 0,
    opacity: 1,
  },
  closed: {
    x: 0,
    opacity: 0,
  },
};

function SingleImage({
  selection,
  summonerNameSelected,
  realNameSelected,
  onClick,
}) {
  return (
    <StyledSingleImageContainer
      onClick={onClick}
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
      animate
      transition={{ duration: 0.2, delay: 0.1 }}
    >
      <StyledAvatarWrapper>
        <StyledBigAvatarImg
          layoutId={selection}
          src={selection}
          summonerNameSelected={summonerNameSelected}
          realNameSelected={realNameSelected}
          // style={{ backgroundColor: color }}
        />
        <StyledBackgroundNames
          initial="exit"
          animate="enter"
          exit="exit"
          variants={avatarInfos}
        />
        <StyledAvatarNames
          initial="closed"
          animate="open"
          exit="exit"
          variants={metaInfoVariantsUl}
        >
          <StyledSummonerName variants={metaInfoVariants}>
            {summonerNameSelected}
          </StyledSummonerName>
          <StyledRealName variants={metaInfoVariants}>
            {realNameSelected}
          </StyledRealName>
        </StyledAvatarNames>
      </StyledAvatarWrapper>
    </StyledSingleImageContainer>
  );
}

export function NetflixMenu() {
  const [currentColor, setColor] = useState(false);

  /// STORE HOOKS
  const [store, setStore] = useStore();
  const {
    currentMovies: {
      key = 1,
      wallpaper = thewitcherWallpaperPath,
      title = "The Witcher",
      year = 2019,
      maturityNumber = "16+",
      type = "1 Season",
      genre = "TV Action & Adventure",
      avatars = [
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
  } = store;

  const avatarsImage = avatars.map((item) => item.image);
  const avatarsSummonerName = avatars.map((item) => item.summonerName);
  const avatarsRealName = avatars.map((item) => item.realName);

  //// GALLERY
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, movies.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  ///// HOOKS Overlay
  const [index, setIndex] = useState(false);

  return (
    <>
      {" "}
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence initial={false} custom={direction}>
          <StyledBox>
            <StyledImgMotion
              key={key}
              // src={movies[imageIndex].image}
              // src={image}
              src={wallpaper}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 200 },
                opacity: { duration: 0.3 },
              }}
            />
          </StyledBox>
          <StyledFilterMotion
            key={`filter${key}`}
            variants={backgroundImageVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ ease: "easeOut", duration: 0.2 }}
          />
          <StyledMetaInfoMotionUl
            key={`listText${key}`}
            initial="closed"
            animate="open"
            // exit="closed"
            exit="exit"
            // variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
            variants={metaInfoVariantsUl}
          >
            <StyledTitleMotion
              key={`titleMeta${key}`}
              variants={metaInfoVariants}
            >
              {title}
            </StyledTitleMotion>
            <StyledMetaInfoMotion
              key={`infosMeta${key}`}
              variants={metaInfoVariants}
            >
              {year} |<Label>{maturityNumber}</Label>| {type} | {genre}
            </StyledMetaInfoMotion>

            {avatarsImage.map((selection, i) => (
              <StyledAvatarImg
                key={i}
                src={selection}
                onClick={() => setIndex(i)}
                layoutId={selection}
              ></StyledAvatarImg>
            ))}

            {/* <StyledAvatarImg src={avatar[0]}></StyledAvatarImg> */}
          </StyledMetaInfoMotionUl>
          {/* <div
          key={`avatarMeta${key}`}
          style={{
            position: "absolute",
            zIndex: 2,
            width: "100%",
            height: "100%",
          }}
        > */}
          {/* <AnimateSharedLayoutGallery /> */}
          {/* </div> */}
          <StyledCovers key={"covers"}>
            {store.movies.map((section, i) => (
              <MovieItem
                key={section.image}
                color={section.color}
                currentColor={currentColor}
                setColor={setColor}
                image={null}
                onClick={() => {
                  //// STORE
                  setStore({ currentMovies: section });
                  // paginate(1);
                }}
              >
                {/* <Link to={`/image/${i}`}> */}
                <img src={section.image} alt="myImage" />
                {/* </Link> */}
              </MovieItem>
            ))}
          </StyledCovers>
          {/* OVERLAY */}
          {index !== false && (
            <StyledOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.37, 0.04, 0.2, 1] }}
              key="overlay"
              onClick={() => setIndex(false)}
            />
          )}
          {index !== false && (
            <SingleImage
              key="image"
              index={index}
              selection={avatarsImage[index]}
              summonerNameSelected={avatarsSummonerName[index]}
              realNameSelected={avatarsRealName[index]}
              // color={colors[index]}
              setIndex={setIndex}
              onClick={() => setIndex(false)}
            />
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </>
  );
}

NetflixMenu.defaultProps = {
  height: 128,
  width: 240,
  text: "Get started!",
  tint: "#0099ff",
};

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(NetflixMenu, {
  text: {
    title: "Text",
    type: ControlType.String,
    defaultValue: "Hello Framer!",
  },
  tint: {
    title: "Tint",
    type: ControlType.Color,
    defaultValue: "#0099ff",
  },
});
