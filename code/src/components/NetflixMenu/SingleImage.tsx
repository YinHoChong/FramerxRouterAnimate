import * as React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

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

// TEXT
const transition = {
  duration: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96],
};
const avatarInfos = {
  exit: { y: 10, opacity: 0, duration: 0, ease: [0.43, 0.13, 0.23, 0.96] },
  enter: { y: 0, opacity: 1, transition: { delay: 0.5, ...transition } },
};

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

export function SingleImage({
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
      <StyledAvatarWrapper layoutId={selection}>
        <StyledBigAvatarImg
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
