import { useCallback } from "react";
import { HEADER_OFFSET } from "@/data/navigation";

/**
 * Custom hook for smooth scrolling to anchor links with easing.
 * @returns {Object} - Object containing the scrollToAnchor function.
 */
const useSmoothScroll = () => {
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const scrollToAnchor = useCallback((e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - HEADER_OFFSET;

      // Custom Smooth Scroll Function (1000ms duration)
      const startPosition = window.pageYOffset;
      const distance = offsetPosition - startPosition;
      const duration = 1000; // Duration in ms
      let start = null;

      const animation = (currentTime) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = easeInOutQuad(
          timeElapsed,
          startPosition,
          distance,
          duration
        );
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      requestAnimationFrame(animation);
    }
  }, []);

  return { scrollToAnchor };
};

export default useSmoothScroll;
