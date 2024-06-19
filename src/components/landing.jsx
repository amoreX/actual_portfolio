import React from "react";
import {useState,useEffect} from "react";
import Page from "./page2"
import "./land.scss";

export default function Landing() {
    const [transition,setTransition]=useState(false);
  return (
    <div id="main-container">
      <div id="landing-container">
        <div id="about-me-container"></div>
        <div id="pic-container"></div>
      </div>
        {transition && <Page />}
    </div>
  );
}
