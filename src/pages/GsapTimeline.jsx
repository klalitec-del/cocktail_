import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const GsapTimeline = () => {
  const timeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
    yoyo: true,
  });

  useGSAP(() => {
    timeline.to("#yellow-box", {
      x: 250,
      rotate: 360,
      borderRadius: "100%",
      duration: 2,
      ease: "back.inOut",
    });
    timeline.to("#yellow-box", {
      y: 250,
      scale: 2,
      rotate: 360,
      borderRadius: "100%",
      duration: 2,
      ease: "back.inOut",
    });

    timeline.to("#yellow-box", {
      x: 500,
      scale: 1,
      rotate: 360,
      borderRadius: "8px",
      duration: 2,
      ease: "back.inOut",
    });
  }, []);
  return (
    <div className="mt-20 space-y-10">
      <button
        className="bg-gray-500 ms-3 text-white p-3 rounded-lg font-bold"
        onClick={() => {
          if (timeline.paused()) {
            timeline.play;
          } else {
            timeline.pause();
          }
        }}
      >
        Play/Pause
      </button>
      <div id="yellow-box" className="w-20 h-20 bg-yellow-500 rounded-lg"></div>
    </div>
  );
};

export default GsapTimeline;
