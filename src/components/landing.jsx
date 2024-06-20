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
  const [border, setBorder] = useState("0px 0px 0px white");
  const [subrect, setSubrect] = useState("#5E6572");
  const [scale, setScale] = useState(1);
  const [picscale, setPicscale] = useState(0);
  const [picrotat, setPicrot] = useState(1);
  const [pageTran, setPagetran] = useState(false);
  const handlemouseenter = () => {
    setColor("white");
    setPicrot(1.3);
    setPicscale(-16);
    setTransition(true);
    setScale(150);
    setSubcolor("white");
    setSubrect("#7D98A1");
    setOpacity(1);
    setBorder("0px 0px 10px #7D98A1");
  };
  const handlemouseleave = () => {
    setColor("black");
    setPicrot(1);
    setPicscale(0);
    setBorder("0px 0px 0px white");
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
            <motion.span
              id="small-title"
              style={{ color: color }}
              initial={{ x: 400, opacity: 0 }}
              transition={{ type: "tween", ease: "anticipate", duration: 1 }}
              animate={{ x: 0, opacity: 1 }}
            >
              Hi There,
            </motion.span>
            <motion.span
              id="big-title"
              style={{ color: color }}
              initial={{ x: 400, opacity: 0 }}
              transition={{
                type: "tween",
                ease: "anticipate",
                duration: 1,
                delay: 0.3,
              }}
              animate={{ x: 0, opacity: 1 }}
            >
              I'm Nihal
            </motion.span>
            <motion.div
              id="rect"
              style={{
                color: subcolor,
                backgroundColor: subrect,
                boxShadow: border,
              }}
              initial={{ scale: 0.3, opacity: 0 }}
              transition={{
                type: "tween",
                ease: "anticipate",
                duration: 1,
                delay: 0.3,
              }}
              animate={{ scale: 1, opacity: 1 }}
            >
              {transition == true
                ? "Coder who likes to Design "
                : "Web Designer who likes to code"}
            </motion.div>
            <motion.span
              id="content"
              style={{ color: color }}
              initial={{ y: 16, opacity: 0 }}
              transition={{
                type: "tween",
                ease: "anticipate",
                duration: 1,
                delay: 1,
              }}
              animate={{ y: 0, opacity: 1 }}
            >
              {transition == true
                ? "Pursuing every available side quest available as an...   "
                : "CMRIT undergrad pursuing Cse. I love to design websites and make cool stuff, all whilst..."}
            </motion.span>
          </div>
          <motion.div
            id="more"
            onMouseEnter={handlemouseenter}
            onMouseLeave={handlemouseleave}
            initial={{ scale:0.1, opacity: 0 }}
              transition={{
                type: "tween",
                ease: "anticipate",
                duration: 1,
                delay: 1,
              }}
              animate={{ scale: 1, opacity: 1 }}
          >
            <div id="nuh" style={{ color: subcolor }}>
              {" "}
              More about me
            </div>
            <div
              id="circle"
              style={{ transform: `scale(${scale})`, opacity: opacity }}
            ></div>
          </motion.div>
        </div>
        {transition && (
          <div id="click" style={{ color: "white" }}>
            Click!
          </div>
        )}
        <div id="pic-container">
          <motion.img
            // style={{ transform: `rotate(${picscale}deg) scale(${picrotat})` }}
            src="/nihal.png"
            alt="me"
            initial={{ x: -500,opacity:0 }}
            // transition={{type:"tween"}}
            // animate={{ x: 0,rotate: picscale, scale: picrotat }}
            animate={{ x: 0,opacity:1 }}
          />
        </div>
      </div>
      {pageTran && <Page />}
    </div>
  );
}
