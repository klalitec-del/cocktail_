import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const GsapFrom = () => {
  useGSAP(() => {
    gsap.from("#green-box", {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotate: 360,
      duration: 2,
      ease: "power1.inOut",
    });
  });
  return (
    <div className="mt-20">
      <div id="green-box" className="w-20 h-20 bg-green-500 rounded-lg"></div>
    </div>
  );
};

export default GsapFrom;
