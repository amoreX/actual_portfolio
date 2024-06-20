import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Page from "./page2";
import "./land.scss";

export default function Landing() {
  const li = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const li2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [transition, setTransition] = useState(false);
  const [color, setColor] = useState("black");
  const [subcolor, setSubcolor] = useState("white");
  const [bar, setBar] = useState("#1C2321");
  const [bg, setBg] = useState("#EEF1EF");
  const [opacity, setOpacity] = useState(0);
  const [border, setBorder] = useState("0px 0px 0px white");
  const [subrect, setSubrect] = useState("#5E6572");
  const [scale, setScale] = useState(1);
  const [pageTran, setPagetran] = useState(false);
  const [picy, setPicy] = useState(0);
  const [picscale, setPicscale] = useState(1);
  const handlemouseenter = () => {
    setColor("white");
    setTransition(true);
    setScale(150);
    setSubcolor("white");
    setSubrect("#7D98A1");
    setOpacity(1);
    setBorder("0px 0px 10px #7D98A1");
    setTimeout(() => {
      setBg("#1C2321");
      setBar("white");
    }, 420);
    setPicscale(1.5);
    setPicy(200);
  };
  const handlemouseleave = () => {
    setPicscale(1);
    setPicy(0);
    setBg("#EEF1EF");
    setBar("#1C2321");
    setColor("black");
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
            initial={{ scale: 0.1, opacity: 0 }}
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
        <div id="pic-container" style={{ backgroundColor: bg }}>
          <div id="grid">
            <div id="rows">
              {li.map((lines, index) => {
                return (
                  <motion.div
                    id="lines"
                    style={{ backgroundColor: bar }}
                    initial={{ width: "0px" }}
                    transition={{
                      type: "tween",
                      ease: "easeInOut",
                      delay: 1.4 + index * 0.1,
                      duration: 0.38,
                    }}
                    animate={{ width: "100vw" }}
                  ></motion.div>
                );
              })}
            </div>
            <div id="col">
              {li2.map((lines, index) => {
                return (
                  <motion.div
                    id="lines"
                    style={{ backgroundColor: bar }}
                    intial={{ height: "0px" }}
                    transition={{
                      type: "tween",
                      ease: "easeInOut",
                      delay: 1.4 + index * 0.1,
                      duration: 0.38,
                    }}
                    animate={{ height: "100vh" }}
                  ></motion.div>
                );
              })}
            </div>
          </div>
          <motion.img
            src="/nihal.png"
            alt="me"
            initial={{ x: -500 }}
            transition={{
              x: { type: "tween", ease: "easeInOut", duration: 0.7 },
              y: {  type:"tween",duration: 0.1 },
              scale: { type:"tween", duration: 0.1 },
            }}
            animate={{ x: 0, y: picy, scale: picscale }}
          />
        </div>
      </div>
      {pageTran && <Page />}
    </div>
  );
}
