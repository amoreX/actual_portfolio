import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Page from "./page2";
import "./land.scss";

export default function Landing() {
  const [transition, setTransition] = useState(false);
  const [color, setColor] = useState("black");
  const [subcolor, setSubcolor] = useState("white");
  const [opacity, setOpacity] = useState(0);
  const[border,setBorder]=useState("0px 0px 0px white");
  const [subrect, setSubrect] = useState("#5E6572");
  const [scale, setScale] = useState(1);
  const handlemouseenter = () => {
    setColor("white");
    setTransition(true);
    setScale(150);
    setSubcolor("white");
    setSubrect("#7D98A1");
    setOpacity(1);
    setBorder("0px 0px 10px #7D98A1")
};
const handlemouseleave = () => {
    setColor("black");
    setBorder("0px 0px 0px white")
    setSubrect("#5E6572");
    setTransition(false);
    setScale(1);
    setOpacity(0);
  };

  return (
    <div id="main-container">
      <div id="landing-container">
        <div id="about-me-container">
          <div id="text">
            <span id="small-title" style={{ color: color }}>
              Hi There,
            </span>
            <span id="big-title" style={{ color: color }}>
              I'm Nihal
            </span>
            <div
              id="rect"
              style={{ color: subcolor, backgroundColor: subrect,boxShadow:border }}
            >
              {transition==true? "Coder who likes to Design ":"Web Designer who likes to code"}
            </div>
            <span id="content" style={{ color: color }}>
              {transition==true? "Pursuing every available side quest available as an...   ":"CMRIT undergrad pursuing Cse. I love to design websites and make cool stuff, all whilst..."}
            </span>
          </div>
          <div
            id="more"
            onMouseEnter={handlemouseenter}
            onMouseLeave={handlemouseleave}
          >
            <div id="nuh" style={{ color: subcolor }}>
              {" "}
              More about me
            </div>
            <div
              id="circle"
              style={{ transform: `scale(${scale})`, opacity: opacity }}
            ></div>
          </div>
        </div>
        {transition && (
          <div id="click" style={{ color: "white" }}>
            Click!
          </div>
        )}
        <div id="pic-container">
          <img src="/nihal.png" alt="me" />
        </div>
      </div>
      {transition && <Page />}
    </div>
  );
}
