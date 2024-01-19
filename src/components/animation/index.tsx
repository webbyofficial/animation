import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./animation.css";
import React from "react";

export type AnimationProps = {
  direction: "top" | "right" | "bottom" | "left";
  delay?: number;
  children: React.ReactNode;
};

export function Animation({ direction, delay, children }: AnimationProps) {
  const { ref, inView } = useInView();
  const [counter, setCounter] = useState(0);
  const classNameHidden = "animation_" + direction + "_hidden";
  const classNameShow = "animation_" + direction + "_show";

  useEffect(() => {
    if (inView) setCounter(1);
  }, [inView]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: (delay ? delay : 0) + "ms" }}
      className={`${"animation_base"} ${classNameHidden} ${
        counter < 1 ? (inView ? " " + classNameShow : "") : " " + classNameShow
      }`}
    >
      {children}
    </div>
  );
}
