import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const GsapScrollTrigger = () => {
  const scrollRef = useRef();

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(scrollRef.current.children);

      boxes.forEach((box) => {
        gsap.to(box, {
          x: 150 * (boxes.indexOf(box) + 5),
          rotate: 360,
          borderRadius: "100%",
          scale: 1.5,
          scrollTrigger: {
            trigger: box,
            start: "bottom, bottom",
            end: "top 20%",
            scrub: true,
          },
          ease: "power1.inOut",
        });
      });
    },
    { scope: scrollRef }
  );
  return (
    <main>
      <h1 className="mt-20">GsapScrollTrigger</h1>

      <p className="mt-5 text-gray-500">
        Gsap Scroll Trigger is a plugin that allows you to create animation.
        that are triggered by the scroll position of the page
      </p>

      <p className="mt-5 text-gray-500">
        Gsap Scroll Trigger is a plugin that allows you to create animation.
        that are triggered by the scroll position of the page
      </p>
      <p className="mt-5 text-gray-500">
        Gsap Scroll Trigger is a plugin that allows you to create animation.
        that are triggered by the scroll position of the page
      </p>

      <div className="mt-20 w-full h-[70vh] flex justify-center items-center flex-col">
        <p className="text-center text-gray-500">
          Scroll down to see the animation
        </p>

        <svg
          className="animate-bounce mt-5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="blue"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5" />
          <path d="M5 12l7 7 7-7" />
        </svg>

        <div className="my-80 w-full h-screen" ref={scrollRef}>
          <div
            id="scroll-pink"
            className="scroll-box w-20 h-20 rounded-lg bg-pink-500"
          ></div>
          <div
            id="scroll-orange"
            className="scroll-box w-20 h-20 rounded-lg bg-orange-500"
          ></div>
        </div>
      </div>
    </main>
  );
};

export default GsapScrollTrigger;
