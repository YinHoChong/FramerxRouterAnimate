import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";
import { useState } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useHoverIntent } from "./use-hover-intent";
import styled from "styled-components";
import { url } from "framer/resource";
import { SingleImage } from "./SingleImage";

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

const StyledCoverMotionLi = styled(motion.li)`
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

const StyledWallpaperImgMotion = styled(motion.img)`
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

const StyledAvatarsMotionUl = styled(motion.ul)`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const StyledAvatarLi = styled(motion.li)`
  list-style: none;
  margin-right: 8px;
`;

const StyledAvatarImg = styled(motion.img)`
  object-fit: cover;
  border-radius: 50%;
  width: 90px;
  height: 90px;
  border: 2px solid rgba(250, 250, 250, 0.2);
  box-shadow: 0px 2px 3px 0px rgba(250, 250, 250, 0.1);
  cursor: pointer;
  // margin-right: 16px;
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

function CoverItem({ color, currentColor, setColor, image, ...props }) {
  const isOpen = color === currentColor;
  const handlers = useHoverIntent(
    () => setColor(color),
    () => isOpen && setColor(false),
    !currentColor
  );

  return (
    <StyledCoverMotionLi
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
const wallpaperVariants = {
  enter: (direction: number) => {
    return {
      // x: direction > 0 ? 1000 : -100,
      x: -100,
      opacity: 0.3,
      // duration: 1.5,
    };
  },
  center: {
    // zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      // zIndex: 0,
      // x: direction < 0 ? 1000 : -100,
      //
      // x: 100,
      // opacity: 0.3,
      // duration: 1.5,
      x: 0,
      opacity: 1,
      // duration: 1.5,
    };
  },
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

// VARIANTS Avatars
const avatarsUlVariants = {
  // open: {
  //   transition: { staggerChildren: 1.07, delayChildren: 0.2 },
  // },
  // closed: {
  //   transition: { staggerChildren: 0.05 },
  // },
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const avatarVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: -150,
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

export function NetflixMenu() {
  const [currentColor, setColor] = useState(false);
  /// STORE HOOKS
  const [store, setStore] = useStore();
  const { selectedMovie, moviesData } = store;
  const {
    key,
    wallpaper,
    title,
    year,
    maturityNumber,
    type,
    genre,
    avatars,
  } = moviesData[selectedMovie];

  const avatarsImage = avatars.map((item) => item.image);
  const avatarsSummonerName = avatars.map((item) => item.summonerName);
  const avatarsRealName = avatars.map((item) => item.realName);

  //// GALLERY
  // const [[page, direction], setPage] = useState([0, 0]);

  ///// HOOKS Overlay
  const [index, setIndex] = useState(false);

  return (
    <>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence
          initial={false}
          // custom={direction}
        >
          <StyledBox key={`box${key}`}>
            <StyledWallpaperImgMotion
              key={key}
              // src={movies[imageIndex].image}
              // src={image}
              src={wallpaper}
              // custom={direction}
              variants={wallpaperVariants}
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
            exit="exit"
            // exit="closed"
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
            <StyledAvatarsMotionUl
              key={`avatarsList${key}`}
              initial="closed"
              animate="open"
              exit="exit"
              variants={avatarsUlVariants}
            >
              {avatarsImage.map((selection, i) => (
                <StyledAvatarLi
                  // key={`avatar${selection}`}
                  key={`avatar${i}`}
                  // key={i}
                  // variants={avatarVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  layoutId={selection}
                >
                  <StyledAvatarImg
                    key={`avatar${i}`}
                    // key={i}
                    src={selection}
                    onClick={() => setIndex(i)}
                    variants={avatarVariants}
                    // layoutId={selection}
                  />
                </StyledAvatarLi>
              ))}
            </StyledAvatarsMotionUl>
          </StyledMetaInfoMotionUl>
          <StyledCovers key={"covers"}>
            {store.movies.map((valueTable) => {
              const { image, color, key } = moviesData[valueTable];
              return (
                <CoverItem
                  key={key}
                  color={color}
                  currentColor={currentColor}
                  setColor={setColor}
                  image={null}
                  onClick={() => {
                    //// STORE
                    // setStore({ currentMovies: section });
                    setStore({ selectedMovie: key });
                    // paginate(1);
                  }}
                >
                  {/* <Link to={`/image/${i}`}> */}
                  <img src={image} alt="myImage" />
                  {/* </Link> */}
                </CoverItem>
              );
            })}
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
