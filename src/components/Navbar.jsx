import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { navLinks } from "../constants/index";
import { ScrollTrigger } from "gsap/all";

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });
    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backgroundFilter: "blur(30px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
  });

  return (
    <nav>
      <div>
        <a href="#home" className="flex items-center gap 2">
          <img src="/images/logo.png" className="w-10 h-10" alt="" />
          <p
            style={{
              fontSize: "20px",
            }}
          >
            Velvet Pour
          </p>
        </a>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="font-normal">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
