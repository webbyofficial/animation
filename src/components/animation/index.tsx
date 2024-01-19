import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import React from "react";

export type AnimationProps = {
  direction: "top" | "right" | "bottom" | "left";
  delay?: number;
  children: React.ReactNode;
};

export function Animation({ direction, delay, children }: AnimationProps) {
  const { ref, inView } = useInView();
  const [counter, setCounter] = useState(0);
  const transformBeforaAnimation = {
    left: "translateX(-100%)",
    right: "translateX(100%)",
    top: "translateY(-50px)",
    bottom: "translateY(100px)",
  }[direction];
  const transformAfterAnimation = {
    left: "translateX(0px)",
    right: "translateX(0px)",
    top: "translateY(0px)",
    bottom: "translateY(0px)",
  }[direction];

  useEffect(() => {
    if (inView) setCounter(1);
  }, [inView]);

  const beforeOrAfterAnimation = (before: any, after: any) => {
    if (counter < 1) {
      if (inView) return after;
      else return before;
    }
    return after;
  };

  console.log(!!delay);

  return (
    <div
      ref={ref}
      style={{
        backgroundColor: "red",
        opacity: beforeOrAfterAnimation(0, 1),
        transition: "all 1s " + (delay ? delay : 0) + "ms",
        width: "auto",
        transform: beforeOrAfterAnimation(
          transformBeforaAnimation,
          transformAfterAnimation
        ),
      }}
    >
      {children}
    </div>
  );
}
