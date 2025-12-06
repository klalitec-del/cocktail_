import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const GsapFromTo = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#red-box",
      {
        x: 0,
        rotation: 0,
        borderRadius: "0%",
      },
      {
        borderRadius: "100%",
        x: 250,
        repeat: -1,
        yoyo: true,
        rotation: 360,
        duration: 2,
        ease: "bounce.out",
      }
    );
  });
  return (
    <div className="mt-20">
      <div id="red-box" className="w-20 h-20 bg-red-500 rounded-lg"></div>
    </div>
  );
};

export default GsapFromTo;
