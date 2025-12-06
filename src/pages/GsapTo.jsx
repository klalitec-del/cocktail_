import React, { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const GsapTo = () => {
  useGSAP(() => {
    gsap.to("#blue-box", {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotate: 360,
      duration: 2,
      ease: "elastic",
    });
  });
  return (
    <div className="mt-20">
      <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg"></div>
    </div>
  );
};

export default GsapTo;
