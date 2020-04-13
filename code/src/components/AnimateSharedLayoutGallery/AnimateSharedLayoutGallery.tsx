import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";

// Open Preview: Command + P
// Learn more: https://framer.com/api

import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import styled from "styled-components";

const StyledGalleryContainer = styled(motion.ul)`
  background-color: #eeeeee;
  border-radius: 25px;
  width: 500px;
  height: 500px;
  margin: 0;
  padding: 0 20px 20px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: space-between;
  list-style: none;
`;

const StyledGalleryItem = styled(motion.li)`
  border-radius: 10px;
  padding: 20px;
  cursor: pointer;
  margin: 20px 0 0 20px;
  flex: 1 1 100px;
`;

const StyledOverlay = styled(motion.div)`
  background: white;
  opacity: 0.2;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const StyledSingleImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`;

// .single-image-container * {
//   pointer-events: all;
// }

const StyledSingleImage = styled(motion.div)`
  border-radius: 20px;
  width: 500px;
  height: 300px;
`;

function Gallery({ items, setIndex }) {
  return (
    <StyledGalleryContainer>
      {items.map((color, i) => (
        <StyledGalleryItem
          key={color}
          onClick={() => setIndex(i)}
          style={{ backgroundColor: color }}
          layoutId={color}
        />
      ))}
    </StyledGalleryContainer>
  );
}

function SingleImage({ color, onClick }) {
  return (
    <StyledSingleImageContainer onClick={onClick}>
      <StyledSingleImage layoutId={color} style={{ backgroundColor: color }} />
    </StyledSingleImageContainer>
  );
}

export function AnimateSharedLayoutGallery() {
  const [index, setIndex] = useState(false);

  return (
    <AnimateSharedLayout>
      <Gallery items={colors} setIndex={setIndex} />
      <AnimatePresence>
        {index !== false && (
          <StyledOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            key="overlay"
            onClick={() => setIndex(false)}
          />
        )}

        {index !== false && (
          <SingleImage
            key="image"
            index={index}
            color={colors[index]}
            setIndex={setIndex}
            onClick={() => setIndex(false)}
          />
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

const numColors = 4 * 4;
const makeColor = (hue) => `hsl(${hue}, 100%, 50%)`;
const colors = Array.from(Array(numColors)).map((_, i) =>
  makeColor(Math.round((360 / numColors) * i))
);

// AnimateSharedLayoutGallery.defaultProps = {
//   height: 128,
//   width: 240,
//   text: "Get started!",
//   tint: "#0099ff",
// };

// // Learn more: https://framer.com/api/property-controls/
// addPropertyControls(AnimateSharedLayoutGallery, {
//   text: {
//     title: "Text",
//     type: ControlType.String,
//     defaultValue: "Hello Framer!",
//   },
//   tint: {
//     title: "Tint",
//     type: ControlType.Color,
//     defaultValue: "#0099ff",
//   },
// });
