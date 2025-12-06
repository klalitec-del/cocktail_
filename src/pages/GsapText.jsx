import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const GsapText = () => {
  useGSAP(() => {
    gsap.to("#text", {
      ease: "power1.inOut",
      opacity: 1,
      y: 0,
    });

    gsap.fromTo(
      ".para",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        delay: 1,
        stagger: 0.1,
      }
    );
  }, []);
  return (
    <main>
      <h1 id="text" className="opacity-0 font-bold translate-y-10">
        GsapText
      </h1>

      <p className="mt-5 para text-gray-500">
        Lorem ipsum dolor sit, amet consectetur <code>gsap.to()</code>,{" "}
        <code>gsap.to()</code>,<code>gsap.to()</code> and adipisicing elit.
        Obcaecati culpa praesentium sunt, modi ex earum. Error numquam labore
        eaque possimus?
      </p>
    </main>
  );
};

export default GsapText;
