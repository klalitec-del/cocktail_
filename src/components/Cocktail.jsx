import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cocktailLists } from "../constants/index";
import { mockTailLists } from "../constants/index";

const Cocktail = () => {
  useGSAP(() => {
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      },
    });
    parallaxTimeline
      .from("#c-left-leaf", {
        x: -100,
        y: 100,
      })
      .from("#c-right-leaf", {
        x: 100,
        y: 100,
      });
  });
  return (
    <section id="cocktails" className="">
      <>
        <img
          className="z-30 w-64 md:w-80 lg:w-96 xl:w-[28rem] "
          src="/images/cocktail-left-leaf.png"
          alt=""
          id="c-left-leaf"
        />
        <img
          className="z-30"
          src="/images/cocktail-right-leaf.png"
          alt=""
          id="c-right-leaf"
        />
      </>

      <div className="list z-30">
        <div className="popular">
          <h2>Most popular cocktails:</h2>

          <ul>
            {cocktailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="md:me-28">
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>-{price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="popular">
          <h2>Most loved mocktails:</h2>

          <ul>
            {mockTailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="me-28">
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>-{price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktail;
