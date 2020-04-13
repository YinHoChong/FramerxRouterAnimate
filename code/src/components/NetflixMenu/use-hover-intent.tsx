import { useRef } from "react";

export function useHoverIntent(onHover, onHoverOut, defer) {
  const timeout = useRef();

  return {
    onMouseEnter: () => {
      clearTimeout(timeout.current);

      if (defer) {
        timeout.current = setTimeout(onHover, 0);
      } else {
        onHover();
      }
    },
    onMouseLeave: () => {
      clearTimeout(timeout.current);
      onHoverOut();
    },
  };
}
