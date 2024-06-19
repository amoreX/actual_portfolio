import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Page from "./page2";
import "./land.scss";

export default function Landing() {
  const [transition, setTransition] = useState(false);
  return (
    <div id="main-container">
      <div id="landing-container">
        <div id="about-me-container">
          <div id="text">
            <span id="small-title">Hi There,</span>
            <span id="big-title">I'm Nihal</span>
            <div id="rect">Web Designer who likes coding</div>
            <span id="content">
              Currently under CMRIT pursuing Cse. I love to design websites and
              make cool stuff.
            </span>
          </div>
          <div id="more">
            More about me
          </div>
        </div>
        <div id="pic-container">
          <img src="/nihal.png" alt="me" />
        </div>
      </div>
      {transition && <Page />}
    </div>
  );
}
