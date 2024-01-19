import React from "react";
import { Animation } from "./index";

export default {
  title: "Animation tests",
};

const animationBase = (
  direction: "top" | "right" | "bottom" | "left",
  delay: number
) => {
  return (
    <Animation direction={direction} delay={delay}>
      <p>Test text!</p>
    </Animation>
  );
};

export const AnimationTop = () => animationBase("top", 0);
export const AnimationRight = () => animationBase("right", 0);
export const AnimationBottom = () => animationBase("bottom", 0);
export const AnimationLeft = () => animationBase("left", 0);
export const AnimationDelay = () => (
  <>
    {animationBase("left", 0)}
    {animationBase("left", 100)}
    {animationBase("left", 200)}
  </>
);
