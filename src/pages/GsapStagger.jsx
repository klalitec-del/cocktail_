import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const GsapStagger = () => {
  useGSAP(() => {
    gsap.to(".stagger-box", {
      y: 250,
      rotate: 360,
      borderRadius: "100%",
      repeat: -1,
      yoyo: true,
      //   stagger: 0.5,
      stagger: {
        amount: 1.5,
        grid: [2, 1],
        axis: "y",
        ease: "circ.inOut",
        from: "center",
      },
    });
  });
  return (
    <div className="mt-20 ">
      <div className="flex gap-5">
        <div className="ms-2 w-20 h-20 bg-indigo-200 rounded-lg stagger-box"></div>
        <div className="w-20 h-20 bg-indigo-300 rounded-lg stagger-box"></div>
        <div className="w-20 h-20 bg-indigo-400 rounded-lg stagger-box"></div>
        <div className="w-20 h-20 bg-indigo-500 rounded-lg stagger-box"></div>
        <div className="w-20 h-20 bg-indigo-600 rounded-lg stagger-box"></div>
        <div className="w-20 h-20 bg-indigo-700 rounded-lg stagger-box"></div>
        <div className="w-20 h-20 bg-indigo-800 rounded-lg stagger-box"></div>
      </div>
    </div>
  );
};

export default GsapStagger;
